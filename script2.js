document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        document.documentElement.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.classList.contains('dark-theme') ? 'light' : 'dark';
        setTheme(currentTheme);
    }

    // Check for saved user preference, if any, on load
    const savedTheme = localStorage.getItem('theme');

    // If the user has explicitly chosen a theme, use it
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Otherwise, use the system preference
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Add event listener to theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});