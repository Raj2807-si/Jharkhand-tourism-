// Navigation Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

/**
 * MOCK AUTHENTICATION SYSTEM
 * Uses localStorage to simulate a database.
 */

// Helper: Get users from localStorage
function getUsers() {
    const users = localStorage.getItem('tourism_users');
    return users ? JSON.parse(users) : [];
}

// Register User
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const users = getUsers();

    // Check if email already exists
    if (users.find(user => user.email === email)) {
        alert("User with this email already exists!");
        return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem('tourism_users', JSON.stringify(users));

    alert("Registration Successful! Please log in.");
    window.location.href = 'login.html';
}

// Login User
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Set session
        localStorage.setItem('tourism_current_user', JSON.stringify(user));
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'index.html';
    } else {
        alert("Invalid email or password!");
    }
}

// Logout User
function logoutUser() {
    localStorage.removeItem('tourism_current_user');
    window.location.reload();
}

// Check Authentication State & Update UI
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('tourism_current_user'));
    const authButtons = document.querySelector('.auth-buttons');

    if (currentUser && authButtons) {
        // user is logged in
        authButtons.innerHTML = `
            <span style="color:white; margin-right:15px; font-weight:500;">Hi, ${currentUser.name.split(' ')[0]}</span>
            <button onclick="logoutUser()" class="btn btn-secondary" style="padding: 8px 20px; font-size: 0.9rem; border-color: #d32f2f; color: #d32f2f;">Logout</button>
        `;
    }
}

// Run checkAuth on page load
document.addEventListener('DOMContentLoaded', checkAuth);
