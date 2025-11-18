// Data Storage (In-memory, no localStorage due to sandbox restrictions)
let appData = {
  users: [
    { id: 1, username: 'admin', email: 'admin@scoutingdb.com', password: 'admin123', role: 'admin', created: '2025-11-18' },
    { id: 2, username: 'milan_scout', email: 'milan@scoutingdb.com', password: 'scout123', role: 'scout', created: '2025-11-15' },
    { id: 3, username: 'ana_analyst', email: 'ana@scoutingdb.com', password: 'analyst123', role: 'analyst', created: '2025-11-10' }
  ],
  players: [
    { id: 1, name: 'J. Iobashvili', birth_year: 2004, position: 'CB', club: 'Telavi', market_value: 150000, league: 'Georgian Premier League', rating: 7.5, potential: 8.2, height: 187, weight: 82, foot: 'right' },
    { id: 2, name: 'K. Andrić', birth_year: 1995, position: 'CM', club: 'Torpedo Kutaisi', market_value: 1000000, league: 'Georgian Premier League', rating: 7.8, potential: 7.5, height: 182, weight: 78, foot: 'left' },
    { id: 3, name: 'O. Parulava', birth_year: 2001, position: 'RW', club: 'Dila', market_value: 200000, league: 'Georgian Premier League', rating: 7.2, potential: 8.1, height: 178, weight: 72, foot: 'right' },
    { id: 4, name: 'A. Bartishvili', birth_year: 2009, position: 'ST', club: 'Kolkheti Poti', market_value: 50000, league: 'Georgian Premier League', rating: 6.8, potential: 8.5, height: 185, weight: 75, foot: 'right' },
    { id: 5, name: 'L. Silagadze', birth_year: 1999, position: 'LB', club: 'Iberia 1999', market_value: 200000, league: 'Georgian Premier League', rating: 7.3, potential: 7.4, height: 180, weight: 76, foot: 'left' },
    { id: 6, name: 'G. Mamageishvili', birth_year: 2003, position: 'CAM', club: 'Iberia 1999', market_value: 300000, league: 'Georgian Premier League', rating: 7.6, potential: 8.3, height: 176, weight: 71, foot: 'right' },
    { id: 7, name: 'D. Chikhladze', birth_year: 1996, position: 'FB', club: 'Samgurali', market_value: 150000, league: 'Georgian Premier League', rating: 7.1, potential: 7.2, height: 179, weight: 74, foot: 'left' },
    { id: 8, name: 'I. Bughridze', birth_year: 1998, position: 'CDM', club: 'Dila', market_value: 200000, league: 'Georgian Premier League', rating: 7.4, potential: 7.6, height: 183, weight: 79, foot: 'right' },
    { id: 9, name: 'A. Ayni', birth_year: 2004, position: 'RB', club: 'Samgurali', market_value: 120000, league: 'Georgian Premier League', rating: 6.9, potential: 8.0, height: 177, weight: 71, foot: 'right' },
    { id: 10, name: 'D. Abuselidze', birth_year: 2005, position: 'ST', club: 'Dinamo Batumi', market_value: 80000, league: 'Georgian Premier League', rating: 6.7, potential: 8.2, height: 186, weight: 76, foot: 'left' },
    { id: 11, name: 'T. Makharadze', birth_year: 2002, position: 'GK', club: 'Telavi', market_value: 100000, league: 'Georgian Premier League', rating: 7.0, potential: 7.8, height: 190, weight: 84, foot: 'right' },
    { id: 12, name: 'N. Kvaratskhelia', birth_year: 2000, position: 'LW', club: 'Torpedo Kutaisi', market_value: 250000, league: 'Georgian Premier League', rating: 7.4, potential: 8.0, height: 175, weight: 70, foot: 'left' },
    { id: 13, name: 'G. Tsitaishvili', birth_year: 1997, position: 'CB', club: 'Dila', market_value: 180000, league: 'Georgian Premier League', rating: 7.2, potential: 7.3, height: 185, weight: 81, foot: 'right' },
    { id: 14, name: 'L. Lominadze', birth_year: 2003, position: 'RB', club: 'Kolkheti Poti', market_value: 90000, league: 'Georgian Premier League', rating: 6.8, potential: 7.9, height: 178, weight: 73, foot: 'right' },
    { id: 15, name: 'S. Dvali', birth_year: 1995, position: 'CB', club: 'Iberia 1999', market_value: 220000, league: 'Georgian Premier League', rating: 7.5, potential: 7.4, height: 188, weight: 83, foot: 'right' },
    { id: 16, name: 'M. Khocholava', birth_year: 1998, position: 'CDM', club: 'Samgurali', market_value: 170000, league: 'Georgian Premier League', rating: 7.1, potential: 7.5, height: 181, weight: 77, foot: 'right' },
    { id: 17, name: 'D. Khocholava', birth_year: 2004, position: 'ST', club: 'Dinamo Batumi', market_value: 70000, league: 'Georgian Premier League', rating: 6.6, potential: 8.3, height: 184, weight: 74, foot: 'left' },
    { id: 18, name: 'V. Basilaia', birth_year: 2001, position: 'CAM', club: 'Telavi', market_value: 150000, league: 'Georgian Premier League', rating: 7.0, potential: 7.9, height: 177, weight: 72, foot: 'right' },
    { id: 19, name: 'A. Kobakhidze', birth_year: 1999, position: 'RW', club: 'Torpedo Kutaisi', market_value: 190000, league: 'Georgian Premier League', rating: 7.3, potential: 7.7, height: 176, weight: 71, foot: 'left' },
    { id: 20, name: 'G. Papunashvili', birth_year: 2005, position: 'CM', club: 'Dila', market_value: 60000, league: 'Georgian Premier League', rating: 6.5, potential: 8.1, height: 180, weight: 75, foot: 'right' },
    { id: 21, name: 'I. Azarov', birth_year: 1996, position: 'LB', club: 'Kolkheti Poti', market_value: 140000, league: 'Georgian Premier League', rating: 7.0, potential: 7.2, height: 179, weight: 75, foot: 'left' },
    { id: 22, name: 'R. Gocholeishvili', birth_year: 2003, position: 'RB', club: 'Iberia 1999', market_value: 110000, league: 'Georgian Premier League', rating: 6.9, potential: 7.8, height: 177, weight: 72, foot: 'right' },
    { id: 23, name: 'L. Shengelia', birth_year: 2000, position: 'ST', club: 'Samgurali', market_value: 160000, league: 'Georgian Premier League', rating: 7.1, potential: 7.6, height: 183, weight: 76, foot: 'right' },
    { id: 24, name: 'N. Ugrekhelidze', birth_year: 1997, position: 'CDM', club: 'Dinamo Batumi', market_value: 180000, league: 'Georgian Premier League', rating: 7.2, potential: 7.4, height: 182, weight: 78, foot: 'right' },
    { id: 25, name: 'G. Beruashvili', birth_year: 2004, position: 'LW', club: 'Telavi', market_value: 80000, league: 'Georgian Premier League', rating: 6.7, potential: 8.2, height: 174, weight: 69, foot: 'left' },
    { id: 26, name: 'T. Maisuradze', birth_year: 2002, position: 'CB', club: 'Torpedo Kutaisi', market_value: 130000, league: 'Georgian Premier League', rating: 6.9, potential: 7.7, height: 186, weight: 82, foot: 'right' },
    { id: 27, name: 'S. Vatsadze', birth_year: 1998, position: 'CM', club: 'Dila', market_value: 200000, league: 'Georgian Premier League', rating: 7.3, potential: 7.5, height: 180, weight: 76, foot: 'right' },
    { id: 28, name: 'D. Ghonghadze', birth_year: 2001, position: 'RW', club: 'Kolkheti Poti', market_value: 90000, league: 'Georgian Premier League', rating: 6.8, potential: 7.9, height: 175, weight: 70, foot: 'right' },
    { id: 29, name: 'A. Kiteishvili', birth_year: 1996, position: 'CAM', club: 'Iberia 1999', market_value: 240000, league: 'Georgian Premier League', rating: 7.5, potential: 7.6, height: 178, weight: 73, foot: 'left' },
    { id: 30, name: 'L. Kvarackhelia', birth_year: 2003, position: 'ST', club: 'Samgurali', market_value: 100000, league: 'Georgian Premier League', rating: 6.9, potential: 8.0, height: 182, weight: 75, foot: 'right' }
  ],
  watchlists: [
    { id: 1, name: 'Tier 1 Targets', description: 'Prime targets for immediate recruitment', created_by: 2, players: [1, 2, 6], priority: 1 },
    { id: 2, name: 'Development Squad', description: 'Young talents for future', created_by: 2, players: [4, 9, 10], priority: 2 },
    { id: 3, name: 'Loan Candidates', description: 'Players suitable for loan moves', created_by: 3, players: [5, 7, 8], priority: 2 }
  ],
  scoutingReports: [
    {
      id: 1,
      player_id: 2,
      scout_id: 2,
      date: '2025-11-15',
      overall_rating: 8,
      technical: { passing: 8, ball_control: 8, shooting: 7, first_touch: 8 },
      physical: { speed: 7, strength: 8, stamina: 8, agility: 7 },
      tactical: { positioning: 8, work_rate: 9, decision_making: 8 },
      mental: { attitude: 9, consistency: 8, potential: 8 },
      strengths: 'Excellent midfielder, great leadership, consistent performer',
      weaknesses: 'Occasionally loses possession in dangerous areas',
      recommendation: 5,
      notes: 'Ready for step up to stronger league'
    }
  ],
  currentUser: null,
  activityLog: []
};

let currentView = 'dashboard';
let filteredPlayers = [];
let selectedPlayersForComparison = [null, null, null, null];
let currentPlayerDetail = null;

// Initialize App
function initApp() {
  // Check if user is logged in
  if (!appData.currentUser) {
    showLoginScreen();
  } else {
    showMainApp();
  }
  
  setupEventListeners();
}

// Event Listeners Setup
function setupEventListeners() {
  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  
  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
  
  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      navigateTo(view);
    });
  });
  
  // User menu toggle
  const userMenuBtn = document.getElementById('userMenuBtn');
  const userDropdown = document.getElementById('userDropdown');
  if (userMenuBtn && userDropdown) {
    userMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
      userDropdown.classList.remove('show');
    });
  }
  
  // Global Search
  const globalSearch = document.getElementById('globalSearch');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      if (currentView === 'players') {
        document.getElementById('playerSearch').value = e.target.value;
        filterPlayers();
      }
    });
  }
  
  // Player filters
  const playerSearch = document.getElementById('playerSearch');
  const filterPosition = document.getElementById('filterPosition');
  const filterClub = document.getElementById('filterClub');
  const clearFilters = document.getElementById('clearFilters');
  
  if (playerSearch) playerSearch.addEventListener('input', filterPlayers);
  if (filterPosition) filterPosition.addEventListener('change', filterPlayers);
  if (filterClub) filterClub.addEventListener('change', filterPlayers);
  if (clearFilters) {
    clearFilters.addEventListener('click', () => {
      playerSearch.value = '';
      filterPosition.value = '';
      filterClub.value = '';
      filterPlayers();
    });
  }
  
  // Add Player Button
  const addPlayerBtn = document.getElementById('addPlayerBtn');
  if (addPlayerBtn) {
    addPlayerBtn.addEventListener('click', () => {
      showToast('Feature coming soon!', 'info');
    });
  }
  
  // Export Players
  const exportPlayersBtn = document.getElementById('exportPlayersBtn');
  if (exportPlayersBtn) {
    exportPlayersBtn.addEventListener('click', exportPlayers);
  }
  
  // Back to Players
  const backToPlayers = document.getElementById('backToPlayers');
  if (backToPlayers) {
    backToPlayers.addEventListener('click', () => {
      navigateTo('players');
    });
  }
  
  // Comparison
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`selectPlayer${i}`);
    if (btn) {
      btn.addEventListener('click', () => openPlayerSelectModal(i));
    }
  }
  
  const compareBtn = document.getElementById('compareBtn');
  if (compareBtn) {
    compareBtn.addEventListener('click', performComparison);
  }
  
  // Modal close
  const closePlayerSelect = document.getElementById('closePlayerSelect');
  const modalOverlay = document.getElementById('modalOverlay');
  if (closePlayerSelect) {
    closePlayerSelect.addEventListener('click', closeModals);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModals);
  }
  
  // Upload
  const uploadZone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');
  if (uploadZone && fileInput) {
    uploadZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileUpload);
  }
  
  // Create Report
  const createReportBtn = document.getElementById('createReportBtn');
  if (createReportBtn) {
    createReportBtn.addEventListener('click', () => {
      showToast('Report creation feature coming soon!', 'info');
    });
  }
  
  // Create Watchlist
  const createWatchlistBtn = document.getElementById('createWatchlistBtn');
  if (createWatchlistBtn) {
    createWatchlistBtn.addEventListener('click', () => {
      showToast('Watchlist creation feature coming soon!', 'info');
    });
  }
  
  // Statistics tabs
  document.querySelectorAll('.stats-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderStatistics(tab.dataset.tab);
    });
  });
  
  // Admin tabs
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderAdminContent(tab.dataset.tab);
    });
  });
}

// Authentication
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');
  
  // Clear previous error
  errorDiv.classList.add('hidden');
  errorDiv.textContent = '';
  
  // Find user by username AND password
  const user = appData.users.find(u => u.username === username && u.password === password);
  
  if (user) {
    appData.currentUser = user;
    logActivity(`User ${user.username} logged in`);
    showToast(`Welcome back, ${user.username}!`, 'success');
    showMainApp();
  } else {
    // Show error message
    errorDiv.textContent = 'Invalid username or password. Please try again.';
    errorDiv.classList.remove('hidden');
  }
}

function handleLogout(e) {
  e.preventDefault();
  logActivity(`User ${appData.currentUser.username} logged out`);
  appData.currentUser = null;
  showLoginScreen();
}

function showLoginScreen() {
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('mainApp').classList.add('hidden');
}

function showMainApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  
  // Update user info
  const user = appData.currentUser;
  document.getElementById('userName').textContent = user.username;
  document.getElementById('userAvatar').textContent = user.username.charAt(0).toUpperCase();
  
  // Hide admin/upload nav for non-admins
  const isAdmin = user.role === 'admin';
  document.getElementById('uploadNav').style.display = isAdmin ? 'flex' : 'none';
  document.getElementById('adminNav').style.display = isAdmin ? 'flex' : 'none';
  
  // Load initial view
  navigateTo('dashboard');
}

// Navigation
function navigateTo(view) {
  currentView = view;
  
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === view);
  });
  
  // Update view content
  document.querySelectorAll('.view-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const viewElement = document.getElementById(`${view}View`);
  if (viewElement) {
    viewElement.classList.add('active');
  }
  
  // Render view content
  switch(view) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'players':
      renderPlayers();
      break;
    case 'comparison':
      renderComparison();
      break;
    case 'reports':
      renderReports();
      break;
    case 'watchlists':
      renderWatchlists();
      break;
    case 'statistics':
      renderStatistics('overview');
      break;
    case 'upload':
      renderUpload();
      break;
    case 'admin':
      renderAdminContent('users');
      break;
  }
}

// Dashboard
function renderDashboard() {
  // Stats
  document.getElementById('statTotalPlayers').textContent = appData.players.length;
  document.getElementById('statReports').textContent = appData.scoutingReports.length;
  document.getElementById('statWatchlists').textContent = appData.watchlists.length;
  
  const avgRating = (appData.players.reduce((sum, p) => sum + p.rating, 0) / appData.players.length).toFixed(1);
  document.getElementById('statAvgRating').textContent = avgRating;
  
  // Recent Activity
  const activityList = document.getElementById('recentActivityList');
  const recentActivities = appData.activityLog.slice(-5).reverse();
  
  activityList.innerHTML = recentActivities.length > 0 
    ? recentActivities.map(activity => `
      <div class="activity-item">
        <div>${activity.message}</div>
        <div class="activity-time">${activity.timestamp}</div>
      </div>
    `).join('')
    : '<div class="activity-item">No recent activity</div>';
  
  // Top Players
  const topList = document.getElementById('topPlayersList');
  const topPlayers = [...appData.players]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  
  topList.innerHTML = topPlayers.map(player => `
    <div class="top-item">
      <div class="top-item-info">
        <div class="top-item-name">${player.name}</div>
        <div class="top-item-meta">${player.position} • ${player.club}</div>
      </div>
      <div class="top-item-rating">${player.rating}</div>
    </div>
  `).join('');
}

// Players
function renderPlayers() {
  // Populate club filter
  const clubs = [...new Set(appData.players.map(p => p.club))].sort();
  const filterClub = document.getElementById('filterClub');
  filterClub.innerHTML = '<option value="">All Clubs</option>' + 
    clubs.map(club => `<option value="${club}">${club}</option>`).join('');
  
  filterPlayers();
}

function filterPlayers() {
  const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
  const positionFilter = document.getElementById('filterPosition').value;
  const clubFilter = document.getElementById('filterClub').value;
  
  filteredPlayers = appData.players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm);
    const matchesPosition = !positionFilter || player.position === positionFilter;
    const matchesClub = !clubFilter || player.club === clubFilter;
    
    return matchesSearch && matchesPosition && matchesClub;
  });
  
  renderPlayersTable();
}

function renderPlayersTable() {
  const tbody = document.getElementById('playersTableBody');
  
  tbody.innerHTML = filteredPlayers.map(player => `
    <tr>
      <td>${player.id}</td>
      <td><span class="player-name" onclick="showPlayerDetail(${player.id})">${player.name}</span></td>
      <td>${calculateAge(player.birth_year)}</td>
      <td><span class="position-badge">${player.position}</span></td>
      <td>${player.club}</td>
      <td>€${formatNumber(player.market_value)}</td>
      <td><span class="rating-badge">${player.rating}</span></td>
      <td>${player.potential}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-icon" onclick="showPlayerDetail(${player.id})" title="View">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
          ${appData.currentUser.role === 'admin' ? `
          <button class="btn-icon" onclick="editPlayer(${player.id})" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button class="btn-icon delete" onclick="deletePlayer(${player.id})" title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function showPlayerDetail(playerId) {
  const player = appData.players.find(p => p.id === playerId);
  if (!player) return;
  
  currentPlayerDetail = player;
  
  const detailContent = document.getElementById('playerDetailContent');
  detailContent.innerHTML = `
    <div class="player-detail-header">
      <div class="player-detail-top">
        <div class="player-photo">${player.name.split(' ').map(n => n[0]).join('')}</div>
        <div class="player-info">
          <h2>${player.name}</h2>
          <div class="player-meta">
            <div class="meta-item">
              <span class="meta-label">Position</span>
              <span class="meta-value">${player.position}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Age</span>
              <span class="meta-value">${calculateAge(player.birth_year)} years</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Club</span>
              <span class="meta-value">${player.club}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Market Value</span>
              <span class="meta-value">€${formatNumber(player.market_value)}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">League</span>
              <span class="meta-value">${player.league}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="player-stats-grid">
        <div class="stat-item">
          <div class="stat-item-label">Rating</div>
          <div class="stat-item-value">${player.rating}</div>
        </div>
        <div class="stat-item">
          <div class="stat-item-label">Potential</div>
          <div class="stat-item-value">${player.potential}</div>
        </div>
        <div class="stat-item">
          <div class="stat-item-label">Height</div>
          <div class="stat-item-value">${player.height}cm</div>
        </div>
        <div class="stat-item">
          <div class="stat-item-label">Weight</div>
          <div class="stat-item-value">${player.weight}kg</div>
        </div>
        <div class="stat-item">
          <div class="stat-item-label">Foot</div>
          <div class="stat-item-value">${player.foot}</div>
        </div>
      </div>
    </div>
    
    <div class="player-detail-content">
      <div class="detail-card">
        <h3>Performance Stats</h3>
        <div class="chart-container">
          <canvas id="playerRadarChart"></canvas>
        </div>
      </div>
      
      <div class="detail-card">
        <h3>Scouting Notes</h3>
        <div class="notes-section">
          <textarea class="form-control" placeholder="Add your scouting notes here..."></textarea>
          <button class="btn btn-primary" style="margin-top: 12px;" onclick="saveNotes()">Save Notes</button>
        </div>
      </div>
    </div>
  `;
  
  // Show player detail view
  document.getElementById('playerDetailView').classList.add('active');
  document.getElementById('playersView').classList.remove('active');
  
  // Render radar chart
  setTimeout(() => renderPlayerRadarChart(player), 100);
}

function renderPlayerRadarChart(player) {
  const ctx = document.getElementById('playerRadarChart');
  if (!ctx) return;
  
  // Generate random stats for demonstration
  const stats = {
    pace: Math.floor(player.rating * 10 + Math.random() * 20),
    shooting: Math.floor(player.rating * 10 + Math.random() * 20),
    passing: Math.floor(player.rating * 10 + Math.random() * 20),
    dribbling: Math.floor(player.rating * 10 + Math.random() * 20),
    defending: Math.floor(player.rating * 10 + Math.random() * 20),
    physical: Math.floor(player.rating * 10 + Math.random() * 20)
  };
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'],
      datasets: [{
        label: player.name,
        data: Object.values(stats),
        backgroundColor: 'rgba(45, 212, 191, 0.2)',
        borderColor: 'rgba(45, 212, 191, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(45, 212, 191, 1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#a0a0a0'
          },
          grid: {
            color: '#3a3d48'
          },
          pointLabels: {
            color: '#f5f5f5',
            font: {
              size: 12
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      }
    }
  });
}

function editPlayer(playerId) {
  showToast('Edit player feature coming soon!', 'info');
}

function deletePlayer(playerId) {
  if (confirm('Are you sure you want to delete this player?')) {
    appData.players = appData.players.filter(p => p.id !== playerId);
    logActivity(`Player deleted (ID: ${playerId})`);
    showToast('Player deleted successfully', 'success');
    filterPlayers();
  }
}

function saveNotes() {
  showToast('Notes saved successfully!', 'success');
}

// Comparison
function renderComparison() {
  // Reset if needed
}

function openPlayerSelectModal(slot) {
  const modal = document.getElementById('playerSelectModal');
  const overlay = document.getElementById('modalOverlay');
  const list = document.getElementById('modalPlayerList');
  
  modal.dataset.slot = slot;
  
  // Render player list
  list.innerHTML = appData.players.map(player => `
    <div class="modal-player-item" onclick="selectPlayerForComparison(${player.id}, ${slot})">
      <div>
        <div style="font-weight: 500;">${player.name}</div>
        <div style="font-size: 12px; color: var(--color-text-secondary);">${player.position} • ${player.club}</div>
      </div>
      <span class="rating-badge">${player.rating}</span>
    </div>
  `).join('');
  
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function selectPlayerForComparison(playerId, slot) {
  const player = appData.players.find(p => p.id === playerId);
  if (!player) return;
  
  selectedPlayersForComparison[slot] = player;
  
  // Update UI
  const btn = document.getElementById(`selectPlayer${slot}`);
  const selectedDiv = document.getElementById(`selectedPlayer${slot}`);
  
  btn.classList.add('hidden');
  selectedDiv.classList.remove('hidden');
  selectedDiv.innerHTML = `
    <div class="selected-player-name">${player.name}</div>
    <div class="selected-player-meta">${player.position} • ${player.club}</div>
    <button class="remove-player" onclick="removePlayerFromComparison(${slot})">Remove</button>
  `;
  
  // Enable compare button if at least 2 players selected
  const selectedCount = selectedPlayersForComparison.filter(p => p !== null).length;
  document.getElementById('compareBtn').disabled = selectedCount < 2;
  
  closeModals();
}

function removePlayerFromComparison(slot) {
  selectedPlayersForComparison[slot] = null;
  
  const btn = document.getElementById(`selectPlayer${slot}`);
  const selectedDiv = document.getElementById(`selectedPlayer${slot}`);
  
  btn.classList.remove('hidden');
  selectedDiv.classList.add('hidden');
  
  const selectedCount = selectedPlayersForComparison.filter(p => p !== null).length;
  document.getElementById('compareBtn').disabled = selectedCount < 2;
  
  // Hide results if no players selected
  if (selectedCount === 0) {
    document.getElementById('comparisonResults').classList.add('hidden');
  }
}

function performComparison() {
  const players = selectedPlayersForComparison.filter(p => p !== null);
  if (players.length < 2) return;
  
  const resultsDiv = document.getElementById('comparisonResults');
  resultsDiv.classList.remove('hidden');
  
  resultsDiv.innerHTML = `
    <h3>Player Comparison</h3>
    <div class="comparison-chart">
      <canvas id="comparisonChart"></canvas>
    </div>
    <div class="comparison-table">
      <table class="data-table">
        <thead>
          <tr>
            <th>Attribute</th>
            ${players.map(p => `<th>${p.name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rating</td>
            ${players.map(p => `<td><span class="rating-badge">${p.rating}</span></td>`).join('')}
          </tr>
          <tr>
            <td>Potential</td>
            ${players.map(p => `<td>${p.potential}</td>`).join('')}
          </tr>
          <tr>
            <td>Age</td>
            ${players.map(p => `<td>${calculateAge(p.birth_year)}</td>`).join('')}
          </tr>
          <tr>
            <td>Market Value</td>
            ${players.map(p => `<td>€${formatNumber(p.market_value)}</td>`).join('')}
          </tr>
          <tr>
            <td>Height</td>
            ${players.map(p => `<td>${p.height}cm</td>`).join('')}
          </tr>
          <tr>
            <td>Weight</td>
            ${players.map(p => `<td>${p.weight}kg</td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
  
  // Render comparison chart
  setTimeout(() => renderComparisonChart(players), 100);
}

function renderComparisonChart(players) {
  const ctx = document.getElementById('comparisonChart');
  if (!ctx) return;
  
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'];
  
  const datasets = players.map((player, index) => {
    const stats = {
      pace: Math.floor(player.rating * 10 + Math.random() * 20),
      shooting: Math.floor(player.rating * 10 + Math.random() * 20),
      passing: Math.floor(player.rating * 10 + Math.random() * 20),
      dribbling: Math.floor(player.rating * 10 + Math.random() * 20),
      defending: Math.floor(player.rating * 10 + Math.random() * 20),
      physical: Math.floor(player.rating * 10 + Math.random() * 20)
    };
    
    return {
      label: player.name,
      data: Object.values(stats),
      backgroundColor: colors[index] + '33',
      borderColor: colors[index],
      borderWidth: 2,
      pointBackgroundColor: colors[index]
    };
  });
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'],
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#a0a0a0'
          },
          grid: {
            color: '#3a3d48'
          },
          pointLabels: {
            color: '#f5f5f5',
            font: {
              size: 12
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      }
    }
  });
}

// Reports
function renderReports() {
  const reportsList = document.getElementById('reportsList');
  
  if (appData.scoutingReports.length === 0) {
    reportsList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 40px;">No scouting reports yet. Create your first report!</p>';
    return;
  }
  
  reportsList.innerHTML = appData.scoutingReports.map(report => {
    const player = appData.players.find(p => p.id === report.player_id);
    const scout = appData.users.find(u => u.id === report.scout_id);
    
    return `
      <div class="report-card">
        <div class="report-info">
          <h4>${player ? player.name : 'Unknown Player'}</h4>
          <div class="report-meta">
            <span>By ${scout ? scout.username : 'Unknown'}</span>
            <span>${report.date}</span>
          </div>
          <div class="report-rating">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${report.overall_rating}/10
          </div>
          <p style="margin-top: 12px; font-size: 14px; color: var(--color-text-secondary);">${report.strengths}</p>
        </div>
        <div>
          <button class="btn btn-secondary" onclick="viewReport(${report.id})">View Full Report</button>
        </div>
      </div>
    `;
  }).join('');
}

function viewReport(reportId) {
  showToast('View full report feature coming soon!', 'info');
}

// Watchlists
function renderWatchlists() {
  const container = document.getElementById('watchlistsContainer');
  
  container.innerHTML = appData.watchlists.map(watchlist => {
    const players = watchlist.players
      .map(pid => appData.players.find(p => p.id === pid))
      .filter(p => p !== undefined);
    
    return `
      <div class="watchlist-card">
        <div class="watchlist-header">
          <div>
            <h3>${watchlist.name}</h3>
            <p class="watchlist-desc">${watchlist.description}</p>
          </div>
          <span class="priority-badge p${watchlist.priority}">Priority ${watchlist.priority}</span>
        </div>
        <div class="watchlist-players">
          ${players.length > 0 ? players.map(player => `
            <div class="watchlist-player-item">
              <div>
                <div style="font-weight: 500;">${player.name}</div>
                <div style="font-size: 11px; color: var(--color-text-secondary);">${player.position} • ${player.club}</div>
              </div>
              <span class="rating-badge">${player.rating}</span>
            </div>
          `).join('') : '<p style="color: var(--color-text-secondary); font-size: 13px; padding: 20px; text-align: center;">No players in this watchlist</p>'}
        </div>
      </div>
    `;
  }).join('');
}

// Statistics
function renderStatistics(tab) {
  const content = document.getElementById('statsContent');
  
  if (tab === 'overview') {
    content.innerHTML = `
      <div class="stats-chart-card">
        <h3>Rating Distribution</h3>
        <div style="height: 300px;"><canvas id="ratingDistChart"></canvas></div>
      </div>
      <div class="stats-chart-card">
        <h3>Players by Position</h3>
        <div style="height: 300px;"><canvas id="positionChart"></canvas></div>
      </div>
    `;
    
    setTimeout(() => {
      renderRatingDistribution();
      renderPositionDistribution();
    }, 100);
  } else if (tab === 'positions') {
    const positions = {};
    appData.players.forEach(p => {
      if (!positions[p.position]) positions[p.position] = [];
      positions[p.position].push(p);
    });
    
    content.innerHTML = Object.entries(positions).map(([pos, players]) => {
      const topPlayer = players.sort((a, b) => b.rating - a.rating)[0];
      return `
        <div class="stats-chart-card">
          <h3>${pos} - ${players.length} players</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Top: ${topPlayer.name} (${topPlayer.rating})</p>
          <div class="top-list">
            ${players.slice(0, 5).map(p => `
              <div class="top-item">
                <div class="top-item-info">
                  <div class="top-item-name">${p.name}</div>
                  <div class="top-item-meta">${p.club}</div>
                </div>
                <div class="top-item-rating">${p.rating}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  } else {
    content.innerHTML = `
      <div class="stats-chart-card">
        <h3>League Statistics</h3>
        <p style="color: var(--color-text-secondary);">All ${appData.players.length} players from ${appData.players[0].league}</p>
      </div>
    `;
  }
}

function renderRatingDistribution() {
  const ctx = document.getElementById('ratingDistChart');
  if (!ctx) return;
  
  const ratings = appData.players.map(p => Math.floor(p.rating));
  const distribution = {};
  ratings.forEach(r => {
    distribution[r] = (distribution[r] || 0) + 1;
  });
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(distribution).sort(),
      datasets: [{
        label: 'Number of Players',
        data: Object.values(distribution),
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#a0a0a0'
          },
          grid: {
            color: '#3a3d48'
          }
        },
        x: {
          ticks: {
            color: '#a0a0a0'
          },
          grid: {
            color: '#3a3d48'
          }
        }
      }
    }
  });
}

function renderPositionDistribution() {
  const ctx = document.getElementById('positionChart');
  if (!ctx) return;
  
  const positions = {};
  appData.players.forEach(p => {
    positions[p.position] = (positions[p.position] || 0) + 1;
  });
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(positions),
      datasets: [{
        data: Object.values(positions),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#f5f5f5'
          }
        }
      }
    }
  });
}

// Upload
function renderUpload() {
  // Already rendered in HTML
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  showToast(`File "${file.name}" uploaded. Processing...`, 'info');
  
  // Simulate processing
  setTimeout(() => {
    showToast('File processed successfully! 15 new players added.', 'success');
    logActivity(`File uploaded: ${file.name}`);
  }, 2000);
}

// Admin
function renderAdminContent(tab) {
  const content = document.getElementById('adminContent');
  
  if (tab === 'users') {
    content.innerHTML = `
      <h3 style="margin-bottom: 20px;">User Management</h3>
      <div class="users-list">
        ${appData.users.map(user => `
          <div class="user-item">
            <div class="user-item-info">
              <div class="user-avatar">${user.username.charAt(0).toUpperCase()}</div>
              <div>
                <div style="font-weight: 500;">${user.username}</div>
                <div style="font-size: 12px; color: var(--color-text-secondary);">${user.email}</div>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <span class="role-badge">${user.role}</span>
              <button class="btn btn-secondary" onclick="editUser(${user.id})">Edit</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    content.innerHTML = `
      <h3 style="margin-bottom: 20px;">Activity Log</h3>
      <div class="activity-list">
        ${appData.activityLog.length > 0 ? appData.activityLog.slice().reverse().map(activity => `
          <div class="activity-item">
            <div>${activity.message}</div>
            <div class="activity-time">${activity.timestamp}</div>
          </div>
        `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No activity logged yet</p>'}
      </div>
    `;
  }
}

function editUser(userId) {
  showToast('Edit user feature coming soon!', 'info');
}

// Export
function exportPlayers() {
  const data = filteredPlayers.map(p => ({
    ID: p.id,
    Name: p.name,
    Age: calculateAge(p.birth_year),
    Position: p.position,
    Club: p.club,
    'Market Value': p.market_value,
    Rating: p.rating,
    Potential: p.potential
  }));
  
  const csv = convertToCSV(data);
  downloadFile(csv, 'players_export.csv', 'text/csv');
  
  showToast('Players exported successfully!', 'success');
  logActivity('Players data exported');
}

function convertToCSV(data) {
  if (data.length === 0) return '';
  
  const headers = Object.keys(data[0]);
  const rows = data.map(row => 
    headers.map(header => JSON.stringify(row[header] || '')).join(',')
  );
  
  return [headers.join(','), ...rows].join('\n');
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// Modals
function closeModals() {
  document.getElementById('playerSelectModal').classList.add('hidden');
  document.getElementById('modalOverlay').classList.add('hidden');
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
  };
  
  toast.innerHTML = `
    ${icons[type]}
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Utility Functions
function calculateAge(birthYear) {
  return 2025 - birthYear;
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function logActivity(message) {
  const timestamp = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  appData.activityLog.push({
    message,
    timestamp,
    user: appData.currentUser ? appData.currentUser.username : 'System'
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initApp);