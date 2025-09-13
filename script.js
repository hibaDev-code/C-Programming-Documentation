const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    themeToggle.onclick = function () {
      if (html.classList.contains("dark-mode")) {
        html.classList.remove("dark-mode"); // Turn OFF dark mode
      } else {
        html.classList.add("dark-mode");   // Turn ON dark mode
      }
    };