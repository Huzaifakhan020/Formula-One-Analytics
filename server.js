const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Proxy endpoint for OpenF1 API
app.get('/api/:endpoint', async (req, res) => {
    try {
        const { endpoint } = req.params;
        const response = await axios.get(`https://api.openf1.org/v1/${endpoint}`, {
            params: req.query,
            headers: {
                'User-Agent': 'F1-Dashboard/1.0'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error.message);
        res.status(error.response?.status || 500).json({ 
            error: error.message,
            endpoint: endpoint 
        });
    }
});

// Get 2026 meetings (race weekends)
app.get('/api/2026/meetings', async (req, res) => {
    try {
        const response = await axios.get('https://api.openf1.org/v1/meetings', {
            params: { year: 2026 }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get the most recent race session
app.get('/api/current-session', async (req, res) => {
    try {
        const response = await axios.get('https://api.openf1.org/v1/sessions', {
            params: { 
                year: 2026,
                session_name: 'Race'
            }
        });
        
        // Sort by date and get the most recent
        const sessions = response.data.sort((a, b) => 
            new Date(b.date_start) - new Date(a.date_start)
        );
        
        res.json(sessions[0] || null);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get session results with driver details
app.get('/api/2026/standings', async (req, res) => {
    try {
        // First, get the most recent race session
        const sessionRes = await axios.get('https://api.openf1.org/v1/sessions', {
            params: { year: 2026, session_name: 'Race' }
        });
        
        if (!sessionRes.data || sessionRes.data.length === 0) {
            return res.json({ message: 'No 2026 race data available yet', data: [] });
        }
        
        // Get the latest session
        const sessions = sessionRes.data.sort((a, b) => 
            new Date(b.date_start) - new Date(a.date_start)
        );
        const latestSession = sessions[0];
        
        // Get session results
        const resultsRes = await axios.get('https://api.openf1.org/v1/session_result', {
            params: { session_key: latestSession.session_key }
        });
        
        // Get driver details
        const driversRes = await axios.get('https://api.openf1.org/v1/drivers', {
            params: { session_key: latestSession.session_key }
        });
        
        // Combine data
        const results = resultsRes.data.map(result => {
            const driver = driversRes.data.find(d => d.driver_number === result.driver_number);
            return {
                position: result.position,
                driver_number: result.driver_number,
                name: driver?.full_name || `Driver ${result.driver_number}`,
                team: driver?.team_name || 'Unknown',
                team_colour: driver?.team_colour || 'FFFFFF',
                time: result.time || 'DNF',
                status: result.status || 'Finished',
                points: result.points || 0
            };
        }).sort((a, b) => a.position - b.position);
        
        res.json({
            session: latestSession,
            results: results,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error fetching 2026 standings:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Get championship standings (requires multiple race results)
app.get('/api/2026/championship', async (req, res) => {
    try {
        // Get all 2026 race sessions
        const sessionRes = await axios.get('https://api.openf1.org/v1/sessions', {
            params: { year: 2026, session_name: 'Race' }
        });
        
        if (!sessionRes.data || sessionRes.data.length === 0) {
            return res.json({ message: 'No 2026 championship data available yet', data: [] });
        }
        
        // Get all race results
        const driverPoints = {};
        
        for (const session of sessionRes.data) {
            const resultsRes = await axios.get('https://api.openf1.org/v1/session_result', {
                params: { session_key: session.session_key }
            });
            
            resultsRes.data.forEach(result => {
                const points = result.points || 0;
                const driverNum = result.driver_number;
                driverPoints[driverNum] = (driverPoints[driverNum] || 0) + points;
            });
        }
        
        // Get driver details for the points
        const driversRes = await axios.get('https://api.openf1.org/v1/drivers', {
            params: { session_key: sessionRes.data[0]?.session_key }
        });
        
        const standings = Object.entries(driverPoints)
            .map(([driverNum, points]) => {
                const driver = driversRes.data.find(d => d.driver_number === parseInt(driverNum));
                return {
                    driver_number: parseInt(driverNum),
                    name: driver?.full_name || `Driver ${driverNum}`,
                    team: driver?.team_name || 'Unknown',
                    points: points,
                    team_colour: driver?.team_colour || 'FFFFFF'
                };
            })
            .sort((a, b) => b.points - a.points);
        
        res.json({
            standings: standings,
            races_completed: sessionRes.data.length,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error fetching championship:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 F1 Analytics Server running at http://localhost:${PORT}`);
    console.log(`📊 Fetching real data from OpenF1 API`);
    console.log(`ℹ️  If no 2026 data appears, the season may not have started yet`);
});