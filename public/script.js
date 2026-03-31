console.log('🚀 F1 Dashboard Loading - REAL 2026 Season Data (3 Races Complete)');

// REAL 2026 DRIVER STANDINGS (After 3 Races: Australia, China, Japan)
// Bahrain and Qatar have been CANCELLED
const current2026Drivers = [
    { name: "Kimi Antonelli", team: "Mercedes", country: "ITA", points: 72, wins: 2, poles: 1, podiums: 3, carNumber: 12 },
    { name: "George Russell", team: "Mercedes", country: "GBR", points: 63, wins: 1, poles: 1, podiums: 2, carNumber: 63 },
    { name: "Charles Leclerc", team: "Ferrari", country: "MON", points: 49, wins: 0, poles: 1, podiums: 2, carNumber: 16 },
    { name: "Lewis Hamilton", team: "Ferrari", country: "GBR", points: 41, wins: 0, poles: 0, podiums: 1, carNumber: 44 },
    { name: "Lando Norris", team: "McLaren", country: "GBR", points: 25, wins: 0, poles: 0, podiums: 0, carNumber: 4 },
    { name: "Oscar Piastri", team: "McLaren", country: "AUS", points: 21, wins: 0, poles: 0, podiums: 0, carNumber: 81 },
    { name: "Oliver Bearman", team: "Haas F1 Team", country: "GBR", points: 17, wins: 0, poles: 0, podiums: 0, carNumber: 87 },
    { name: "Pierre Gasly", team: "Alpine", country: "FRA", points: 15, wins: 0, poles: 0, podiums: 0, carNumber: 10 },
    { name: "Max Verstappen", team: "Red Bull Racing", country: "NED", points: 12, wins: 0, poles: 0, podiums: 0, carNumber: 1 },
    { name: "Liam Lawson", team: "Racing Bulls", country: "NZL", points: 10, wins: 0, poles: 0, podiums: 0, carNumber: 30 },
    { name: "Arvid Lindblad", team: "Racing Bulls", country: "GBR", points: 4, wins: 0, poles: 0, podiums: 0, carNumber: 40 },
    { name: "Isack Hadjar", team: "Red Bull Racing", country: "FRA", points: 4, wins: 0, poles: 0, podiums: 0, carNumber: 6 },
    { name: "Gabriel Bortoleto", team: "Audi", country: "BRA", points: 2, wins: 0, poles: 0, podiums: 0, carNumber: 5 },
    { name: "Carlos Sainz", team: "Williams", country: "ESP", points: 2, wins: 0, poles: 0, podiums: 0, carNumber: 55 },
    { name: "Esteban Ocon", team: "Haas F1 Team", country: "FRA", points: 1, wins: 0, poles: 0, podiums: 0, carNumber: 31 },
    { name: "Franco Colapinto", team: "Alpine", country: "ARG", points: 1, wins: 0, poles: 0, podiums: 0, carNumber: 43 },
    { name: "Nico Hulkenberg", team: "Audi", country: "GER", points: 0, wins: 0, poles: 0, podiums: 0, carNumber: 27 },
    { name: "Alexander Albon", team: "Williams", country: "THA", points: 0, wins: 0, poles: 0, podiums: 0, carNumber: 23 },
    { name: "Valtteri Bottas", team: "Cadillac", country: "FIN", points: 0, wins: 0, poles: 0, podiums: 0, carNumber: 77 },
    { name: "Sergio Perez", team: "Cadillac", country: "MEX", points: 0, wins: 0, poles: 0, podiums: 0, carNumber: 11 },
    { name: "Fernando Alonso", team: "Aston Martin", country: "ESP", points: 0, wins: 0, poles: 0, podiums: 0, carNumber: 14 },
    { name: "Lance Stroll", team: "Aston Martin", country: "CAN", points: 0, wins: 0, poles: 0, podiums: 0, carNumber: 18 }
];

// REAL 2026 CONSTRUCTOR STANDINGS (After 3 Races)
const constructorStandings = [
    { team: "Mercedes", points: 135, wins: 3, podiums: 5, color: "#00D2BE" },
    { team: "Ferrari", points: 90, wins: 0, podiums: 3, color: "#DC0000" },
    { team: "McLaren", points: 46, wins: 0, podiums: 0, color: "#FF8700" },
    { team: "Haas F1 Team", points: 18, wins: 0, podiums: 0, color: "#FFFFFF" },
    { team: "Alpine", points: 16, wins: 0, podiums: 0, color: "#0090FF" },
    { team: "Red Bull Racing", points: 16, wins: 0, podiums: 0, color: "#3671C6" },
    { team: "Racing Bulls", points: 14, wins: 0, podiums: 0, color: "#5E8F8F" },
    { team: "Audi", points: 2, wins: 0, podiums: 0, color: "#9B9B9B" },
    { team: "Williams", points: 2, wins: 0, podiums: 0, color: "#64C4FF" },
    { team: "Cadillac", points: 0, wins: 0, podiums: 0, color: "#000000" },
    { team: "Aston Martin", points: 0, wins: 0, podiums: 0, color: "#006F62" }
];

// REAL 2026 RACE RESULTS (Only 3 Races - Bahrain & Qatar Cancelled)
const raceResults = [
    { 
        grandPrix: "Australia", 
        date: "08 Mar", 
        winner: "George Russell", 
        team: "Mercedes", 
        laps: 58, 
        time: "1:23:06.801",
        pole: "George Russell",
        fastestLap: "Kimi Antonelli"
    },
    { 
        grandPrix: "China", 
        date: "15 Mar", 
        winner: "Kimi Antonelli", 
        team: "Mercedes", 
        laps: 56, 
        time: "1:33:15.607",
        pole: "Kimi Antonelli",
        fastestLap: "Kimi Antonelli"
    },
    { 
        grandPrix: "Japan", 
        date: "29 Mar", 
        winner: "Kimi Antonelli", 
        team: "Mercedes", 
        laps: 53, 
        time: "1:28:03.403",
        pole: "Charles Leclerc",
        fastestLap: "Lewis Hamilton"
    }
];

// Cancelled Races Information
const cancelledRaces = [
    { grandPrix: "Bahrain", originalDate: "12 Apr", reason: "Cancelled" },
    { grandPrix: "Qatar", originalDate: "19 Apr", reason: "Cancelled" }
];

// Next Race Information
const nextRace = {
    grandPrix: "Miami",
    date: "May 1-3, 2026",
    location: "Miami, USA",
    track: "Miami International Autodrome",
    status: "Upcoming"
};

// All-time drivers data (historical)
const allTimeDrivers = [
    { name: "Lewis Hamilton", championships: 7, races: 356, poles: 104, wins: 103, era: "2010s-2020s" },
    { name: "Michael Schumacher", championships: 7, races: 308, poles: 68, wins: 91, era: "1990s-2000s" },
    { name: "Juan Manuel Fangio", championships: 5, races: 52, poles: 29, wins: 24, era: "1950s" },
    { name: "Alain Prost", championships: 4, races: 202, poles: 33, wins: 51, era: "1980s-1990s" },
    { name: "Sebastian Vettel", championships: 4, races: 300, poles: 57, wins: 53, era: "2010s" },
    { name: "Max Verstappen", championships: 4, races: 209, poles: 40, wins: 63, era: "2020s" },
    { name: "Ayrton Senna", championships: 3, races: 162, poles: 65, wins: 41, era: "1980s-1990s" },
    { name: "Niki Lauda", championships: 3, races: 177, poles: 24, wins: 25, era: "1970s-1980s" },
    { name: "Jackie Stewart", championships: 3, races: 100, poles: 17, wins: 27, era: "1960s-1970s" },
    { name: "Fernando Alonso", championships: 2, races: 401, poles: 22, wins: 32, era: "2000s-2020s" }
];

// All-time cars data
const allTimeCars = [
    { name: "Mercedes W11", team: "Mercedes", championships: 1, races: 17, poles: 15, wins: 13, era: "2020" },
    { name: "McLaren MP4/4", team: "McLaren-Honda", championships: 1, races: 16, poles: 15, wins: 15, era: "1988" },
    { name: "Ferrari F2004", team: "Ferrari", championships: 1, races: 18, poles: 12, wins: 15, era: "2004" },
    { name: "Red Bull RB19", team: "Red Bull", championships: 1, races: 22, poles: 14, wins: 21, era: "2023" },
    { name: "Lotus 72", team: "Lotus", championships: 3, races: 75, poles: 20, wins: 20, era: "1970-1975" }
];

// Render Top 10 Drivers
function renderDrivers() {
    console.log('🏆 Rendering all-time drivers...');
    const container = document.getElementById('drivers-grid');
    if (!container) return;
    
    container.innerHTML = allTimeDrivers.map((driver, index) => `
        <div class="driver-card">
            <div class="driver-header">
                <span class="driver-name">${driver.name}</span>
                <span class="driver-rank">#${index + 1}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏆 Championships</span>
                <span class="stats-value">${driver.championships}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏁 Races</span>
                <span class="stats-value">${driver.races}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🎯 Poles</span>
                <span class="stats-value">${driver.poles}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🥇 Wins</span>
                <span class="stats-value">${driver.wins}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">📅 Era</span>
                <span class="stats-value">${driver.era}</span>
            </div>
        </div>
    `).join('');
}

// Render Top 5 Cars
function renderCars() {
    console.log('🏎️ Rendering all-time cars...');
    const container = document.getElementById('cars-grid');
    if (!container) return;
    
    container.innerHTML = allTimeCars.map((car, index) => `
        <div class="car-card">
            <div class="car-header">
                <span class="car-name">${car.name}</span>
                <span class="car-rank">#${index + 1}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏢 Team</span>
                <span class="stats-value">${car.team}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏆 Championships</span>
                <span class="stats-value">${car.championships}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏁 Races</span>
                <span class="stats-value">${car.races}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🎯 Poles</span>
                <span class="stats-value">${car.poles}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🥇 Wins</span>
                <span class="stats-value">${car.wins}</span>
            </div>
        </div>
    `).join('');
}

// Render 2026 Season Data
function renderCurrentDrivers() {
    console.log('📊 Rendering 2026 Season Data...');
    const container = document.getElementById('current-grid');
    if (!container) return;
    
    let html = `
        <div style="background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05)); border-left: 4px solid #ffd700; padding: 1.2rem; margin-bottom: 2rem; border-radius: 12px;">
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; justify-content: space-between;">
                <div>
                    <span style="font-size: 1.5rem;">🏆</span>
                    <strong style="color: #ffd700; margin-left: 0.5rem;">2026 FIA Formula One World Championship</strong>
                    <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 0.5rem;">
                        After 3 Races: Australia 🇦🇺 | China 🇨🇳 | Japan 🇯🇵
                    </p>
                </div>
                <div style="text-align: right; background: rgba(255,215,0,0.1); padding: 0.75rem 1.5rem; border-radius: 12px;">
                    <div style="color: #ffd700; font-size: 0.85rem; font-weight: 600;">🏁 NEXT RACE</div>
                    <div style="font-weight: bold; font-size: 1.1rem;">🇺🇸 Miami Grand Prix</div>
                    <div style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">May 1-3, 2026</div>
                </div>
            </div>
        </div>
    `;
    
    // Cancelled Races Alert
    html += `
        <div style="background: rgba(255,0,0,0.1); border-left: 4px solid #ff4444; padding: 1rem; margin-bottom: 2rem; border-radius: 12px;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="font-size: 1.2rem;">⚠️</span>
                <div>
                    <strong style="color: #ff8888;">Schedule Update</strong>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.85rem; margin-top: 0.25rem;">
                        Bahrain GP (Apr 12) and Qatar GP (Apr 19) have been cancelled.
                        The next race is the Miami Grand Prix.
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // Driver Standings Table
    html += `
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #ff6b6b; margin-bottom: 1rem;">🏎️ Driver Championship Standings</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: rgba(255,255,255,0.1); border-bottom: 2px solid #ff6b6b;">
                            <th style="padding: 12px; text-align: left;">Pos</th>
                            <th style="padding: 12px; text-align: left;">Driver</th>
                            <th style="padding: 12px; text-align: left;">Nationality</th>
                            <th style="padding: 12px; text-align: left;">Team</th>
                            <th style="padding: 12px; text-align: center;">Pts</th>
                            <th style="padding: 12px; text-align: center;">Wins</th>
                            <th style="padding: 12px; text-align: center;">Poles</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    current2026Drivers.forEach((driver, index) => {
        const position = index + 1;
        const medalColor = position === 1 ? '#ffd700' : position === 2 ? '#c0c0c0' : position === 3 ? '#cd7f32' : 'transparent';
        html += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); ${position <= 3 ? `background: ${medalColor}10;` : ''}">
                <td style="padding: 12px; font-weight: bold; color: ${position <= 3 ? medalColor : 'white'};">${position}</td>
                <td style="padding: 12px; font-weight: 600;">${driver.name}</td>
                <td style="padding: 12px;">${driver.country}</td>
                <td style="padding: 12px;">${driver.team}</td>
                <td style="padding: 12px; text-align: center; font-weight: bold; color: #ffd700;">${driver.points}</td>
                <td style="padding: 12px; text-align: center;">${driver.wins}</td>
                <td style="padding: 12px; text-align: center;">${driver.poles}</td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Constructor Standings
    html += `
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #ff6b6b; margin-bottom: 1rem;">🏢 Constructor Championship Standings</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: rgba(255,255,255,0.1); border-bottom: 2px solid #ff6b6b;">
                            <th style="padding: 12px; text-align: left;">Pos</th>
                            <th style="padding: 12px; text-align: left;">Team</th>
                            <th style="padding: 12px; text-align: center;">Pts</th>
                            <th style="padding: 12px; text-align: center;">Wins</th>
                            <th style="padding: 12px; text-align: center;">Podiums</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    constructorStandings.forEach((team, index) => {
        html += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 12px; font-weight: bold;">${index + 1}</td>
                <td style="padding: 12px; font-weight: 600;">
                    <span style="display: inline-block; width: 12px; height: 12px; background: ${team.color}; border-radius: 2px; margin-right: 8px;"></span>
                    ${team.team}
                </td>
                <td style="padding: 12px; text-align: center; font-weight: bold; color: #ffd700;">${team.points}</td>
                <td style="padding: 12px; text-align: center;">${team.wins}</td>
                <td style="padding: 12px; text-align: center;">${team.podiums}</td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Race Results
    html += `
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #ff6b6b; margin-bottom: 1rem;">🏁 2026 Race Results</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: rgba(255,255,255,0.1); border-bottom: 2px solid #ff6b6b;">
                            <th style="padding: 12px; text-align: left;">Grand Prix</th>
                            <th style="padding: 12px; text-align: left;">Date</th>
                            <th style="padding: 12px; text-align: left;">Winner</th>
                            <th style="padding: 12px; text-align: left;">Team</th>
                            <th style="padding: 12px; text-align: center;">Laps</th>
                            <th style="padding: 12px; text-align: left;">Pole Position</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    raceResults.forEach(race => {
        html += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 12px; font-weight: 600;">${race.grandPrix}</td>
                <td style="padding: 12px;">${race.date}</td>
                <td style="padding: 12px; font-weight: 600; color: #ffd700;">${race.winner}</td>
                <td style="padding: 12px;">${race.team}</td>
                <td style="padding: 12px; text-align: center;">${race.laps}</td>
                <td style="padding: 12px;">${race.pole}</td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Next Race Card
    html += `
        <div>
            <h3 style="color: #ff6b6b; margin-bottom: 1rem;">📅 Upcoming Race</h3>
            <div style="background: linear-gradient(135deg, rgba(0,210,190,0.1), rgba(0,210,190,0.05)); border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(0,210,190,0.3);">
                <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; justify-content: space-between;">
                    <div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #00D2BE;">🇺🇸 Miami Grand Prix</div>
                        <div style="color: #ffd700; font-size: 1rem; margin: 0.5rem 0;">📅 ${nextRace.date}</div>
                        <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">📍 ${nextRace.location}</div>
                        <div style="color: rgba(255,255,255,0.5); font-size: 0.85rem;">🏁 ${nextRace.track}</div>
                    </div>
                    <div style="background: rgba(0,210,190,0.2); padding: 0.75rem 1.5rem; border-radius: 12px;">
                        <div style="color: #00D2BE; font-weight: bold;">STATUS</div>
                        <div style="font-size: 1.2rem; font-weight: bold;">${nextRace.status}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    console.log(`✅ 2026 season rendered with ${current2026Drivers.length} drivers, ${raceResults.length} races completed`);
}

// Populate driver selects for Era Normalizer
function populateDriverSelects() {
    const select1 = document.getElementById('driver1-select');
    const select2 = document.getElementById('driver2-select');
    
    if (!select1 || !select2) return;
    
    let options = '';
    for (let i = 0; i < allTimeDrivers.length; i++) {
        const d = allTimeDrivers[i];
        options += `<option value="${d.name}">${d.name} (${d.era})</option>`;
    }
    
    select1.innerHTML = '<option value="">Select Driver 1</option>' + options;
    select2.innerHTML = '<option value="">Select Driver 2</option>' + options;
}

// Normalize stats for era comparison
function normalizeStats(driver) {
    const avgRacesPerEra = {
        "1950s": 8, "1960s": 10, "1970s": 15, "1980s": 16,
        "1990s": 16, "2000s": 18, "2010s": 20, "2020s": 22
    };
    const racesPerYear = avgRacesPerEra[driver.era] || 20;
    const winPercentage = ((driver.wins / driver.races) * 100).toFixed(1);
    const polePercentage = ((driver.poles / driver.races) * 100).toFixed(1);
    
    return {
        name: driver.name,
        era: driver.era,
        championships: driver.championships,
        winPercentage: winPercentage,
        polePercentage: polePercentage,
        racesPerYear: racesPerYear
    };
}

// Compare two drivers
function compareDrivers() {
    const name1 = document.getElementById('driver1-select').value;
    const name2 = document.getElementById('driver2-select').value;
    
    if (!name1 || !name2) {
        alert('Please select both drivers');
        return;
    }
    
    const driver1 = allTimeDrivers.find(d => d.name === name1);
    const driver2 = allTimeDrivers.find(d => d.name === name2);
    const norm1 = normalizeStats(driver1);
    const norm2 = normalizeStats(driver2);
    
    const resultDiv = document.getElementById('comparison-result');
    resultDiv.innerHTML = `
        <div class="comparison-card">
            <h3>${norm1.name} (${norm1.era})</h3>
            <div class="stats-row">
                <span class="stats-label">🏆 Championships</span>
                <span class="stats-value">${norm1.championships}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">📊 Win %</span>
                <span class="stats-value">${norm1.winPercentage}%</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🎯 Pole %</span>
                <span class="stats-value">${norm1.polePercentage}%</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">📅 Races/Season</span>
                <span class="stats-value">${norm1.racesPerYear}</span>
            </div>
        </div>
        <div class="comparison-card">
            <h3>${norm2.name} (${norm2.era})</h3>
            <div class="stats-row">
                <span class="stats-label">🏆 Championships</span>
                <span class="stats-value">${norm2.championships}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">📊 Win %</span>
                <span class="stats-value">${norm2.winPercentage}%</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🎯 Pole %</span>
                <span class="stats-value">${norm2.polePercentage}%</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">📅 Races/Season</span>
                <span class="stats-value">${norm2.racesPerYear}</span>
            </div>
        </div>
    `;
}

// Initialize tabs
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 F1 Dashboard Initialized');
    console.log('📊 Displaying REAL 2026 season data after 3 races (Australia, China, Japan)');
    console.log('⚠️ Bahrain and Qatar GPs have been cancelled');
    console.log('🇺🇸 Next race: Miami Grand Prix (May 1-3, 2026)');
    renderDrivers();
    renderCars();
    renderCurrentDrivers();
    populateDriverSelects();
    initTabs();
    
    const compareBtn = document.getElementById('compare-btn');
    if (compareBtn) {
        compareBtn.addEventListener('click', compareDrivers);
    }
});