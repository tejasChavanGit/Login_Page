document.addEventListener("DOMContentLoaded", function () {
    const signinContainer = document.getElementById("signin-container");
    const helloContainer = document.getElementById("hello-container");
    const signupContainer = document.getElementById("signup-container");
    const signinLink = document.getElementById("signin-link");
    const signupLink = document.getElementById("signup-link");
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const signinButton = document.getElementById("signin-button");
    const signupButton = document.getElementById("signup-button");
    const userGreeting = document.getElementById("user-greeting");
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    const pageBody = document.getElementById("page-body");

    let users = {};

    function toggleScrollToTopButton() {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    window.addEventListener("scroll", toggleScrollToTopButton);

    scrollToTopButton.addEventListener("click", function () {
        pageBody.scrollIntoView({ behavior: "smooth" });
    });

    signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        signinContainer.classList.add("hidden");
        signupContainer.classList.remove("hidden");
    });

    signinLink.addEventListener("click", function (e) {
        e.preventDefault();
        signupContainer.classList.add("hidden");
        signinContainer.classList.remove("hidden");
    });

    signupButton.addEventListener("click", function () {
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        if (username && password) {
            users[username] = password;
            signupForm.reset();
            alert("Account created successfully. You can now sign in.");
            signinLink.click();
        } else {
            alert("Please enter both username and password.");
        }
    });

    signinButton.addEventListener("click", function () {
        const username = document.getElementById("signin-username").value;
        const password = document.getElementById("signin-password").value;

        if (users[username] === password) {
            signinContainer.classList.add("hidden");
            helloContainer.classList.remove("hidden");
            userGreeting.textContent = username;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    const darkThemeButton = document.getElementById("darkThemeButton");
    const lightThemeButton = document.getElementById("lightThemeButton");

    function setDarkTheme() {
        helloContainer.classList.add("dark-theme");
    }

    function setLightTheme() {
        helloContainer.classList.remove("dark-theme");
    }

    darkThemeButton.addEventListener("click", setDarkTheme);
    lightThemeButton.addEventListener("click", setLightTheme);
});
