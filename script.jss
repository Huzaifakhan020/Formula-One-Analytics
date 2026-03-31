// Mock data for all-time rankings
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

const allTimeCars = [
    { name: "Mercedes W11", team: "Mercedes", championships: 1, races: 17, poles: 15, wins: 13, era: "2020" },
    { name: "McLaren MP4/4", team: "McLaren-Honda", championships: 1, races: 16, poles: 15, wins: 15, era: "1988" },
    { name: "Ferrari F2004", team: "Ferrari", championships: 1, races: 18, poles: 12, wins: 15, era: "2004" },
    { name: "Red Bull RB19", team: "Red Bull", championships: 1, races: 22, poles: 14, wins: 21, era: "2023" },
    { name: "Lotus 72", team: "Lotus", championships: 3, races: 75, poles: 20, wins: 20, era: "1970-1975" }
];

async function fetchCurrentDrivers() {
    try {
        const response = await fetch('/api/drivers?session_key=latest');
        if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
                return data.map(driver => ({
                    name: driver.full_name || `${driver.first_name} ${driver.last_name}`,
                    team: driver.team_name || "TBA",
                    races: 0,
                    poles: 0,
                    wins: 0,
                    championships: 0
                }));
            }
        }
        return [
            { name: "Max Verstappen", team: "Red Bull", races: 5, poles: 3, wins: 4, championships: 4 },
            { name: "Charles Leclerc", team: "Ferrari", races: 5, poles: 1, wins: 0, championships: 0 },
            { name: "Lando Norris", team: "McLaren", races: 5, poles: 1, wins: 1, championships: 0 },
            { name: "Lewis Hamilton", team: "Ferrari", races: 5, poles: 0, wins: 0, championships: 7 },
            { name: "George Russell", team: "Mercedes", races: 5, poles: 0, wins: 0, championships: 0 }
        ];
    } catch (error) {
        console.error('Error fetching current drivers:', error);
        return [];
    }
}

function renderDrivers() {
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

function renderCars() {
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

async function renderCurrentDrivers() {
    const container = document.getElementById('current-grid');
    if (!container) return;
    container.innerHTML = '<div class="loading">Loading current season data...</div>';
    const drivers = await fetchCurrentDrivers();
    container.innerHTML = drivers.map((driver) => `
        <div class="driver-card">
            <div class="driver-header">
                <span class="driver-name">${driver.name}</span>
                <span class="driver-rank">${driver.team}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏆 Championships</span>
                <span class="stats-value">${driver.championships}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🏁 Races (2026)</span>
                <span class="stats-value">${driver.races}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🎯 Poles (2026)</span>
                <span class="stats-value">${driver.poles}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">🥇 Wins (2026)</span>
                <span class="stats-value">${driver.wins}</span>
            </div>
        </div>
    `).join('');
}

function populateDriverSelects() {
    const driverSelect1 = document.getElementById('driver1-select');
    const driverSelect2 = document.getElementById('driver2-select');
    if (!driverSelect1 || !driverSelect2) return;
    
    const allDrivers = [...allTimeDrivers];
    driverSelect1.innerHTML = '<option value="">Select Driver</option>' + 
        allDrivers.map(d => `<option value="${d.name}">${d.name} (${d.era})</option>`).join('');
    driverSelect2.innerHTML = '<option value="">Select Driver</option>' + 
        allDrivers.map(d => `<option value="${d.name}">${d.name} (${d.era})</option>`).join('');
}

function normalizeStats(driver) {
    const avgRacesPerEra = {
        "1950s": 8, "1960s": 10, "1970s": 15, "1980s": 16,
        "1990s": 16, "2000s": 18, "2010s": 20, "2020s": 22
    };
    const racesPerYear = avgRacesPerEra[driver.era] || 20;
    const normalizedWins = (driver.wins / driver.races) * 100;
    const normalizedPoles = (driver.poles / driver.races) * 100;
    return {
        name: driver.name, era: driver.era, championships: driver.championships,
        winPercentage: normalizedWins.toFixed(1), polePercentage: normalizedPoles.toFixed(1), racesPerYear: racesPerYear
    };
}

function compareDrivers() {
    const driver1Name = document.getElementById('driver1-select').value;
    const driver2Name = document.getElementById('driver2-select').value;
    if (!driver1Name || !driver2Name) { 
        alert('Please select both drivers'); 
        return; 
    }
    
    const driver1 = allTimeDrivers.find(d => d.name === driver1Name);
    const driver2 = allTimeDrivers.find(d => d.name === driver2Name);
    const normalized1 = normalizeStats(driver1);
    const normalized2 = normalizeStats(driver2);
    
    const resultContainer = document.getElementById('comparison-result');
    if (!resultContainer) return;
    resultContainer.innerHTML = `
        <div class="comparison-card">
            <h3>${normalized1.name} (${normalized1.era})</h3>
            <div class="comparison-stats">
                <div class="stats-row"><span class="stats-label">🏆 Championships</span><span class="stats-value">${normalized1.championships}</span></div>
                <div class="stats-row"><span class="stats-label">📊 Win % (Normalized)</span><span class="stats-value">${normalized1.winPercentage}%</span></div>
                <div class="stats-row"><span class="stats-label">🎯 Pole % (Normalized)</span><span class="stats-value">${normalized1.polePercentage}%</span></div>
                <div class="stats-row"><span class="stats-label">📅 Avg Races/Season</span><span class="stats-value">${normalized1.racesPerYear}</span></div>
            </div>
        </div>
        <div class="comparison-card">
            <h3>${normalized2.name} (${normalized2.era})</h3>
            <div class="comparison-stats">
                <div class="stats-row"><span class="stats-label">🏆 Championships</span><span class="stats-value">${normalized2.championships}</span></div>
                <div class="stats-row"><span class="stats-label">📊 Win % (Normalized)</span><span class="stats-value">${normalized2.winPercentage}%</span></div>
                <div class="stats-row"><span class="stats-label">🎯 Pole % (Normalized)</span><span class="stats-value">${normalized2.polePercentage}%</span></div>
                <div class="stats-row"><span class="stats-label">📅 Avg Races/Season</span><span class="stats-value">${normalized2.racesPerYear}</span></div>
            </div>
        </div>
    `;
}

function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            if (tabId === 'current') { 
                renderCurrentDrivers(); 
            }
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderDrivers();
    renderCars();
    renderCurrentDrivers();
    populateDriverSelects();
    initTabs();
    const compareBtn = document.getElementById('compare-btn');
    if (compareBtn) compareBtn.addEventListener('click', compareDrivers);
});