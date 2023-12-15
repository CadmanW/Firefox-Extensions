function darkModeStyle(el, color, backgroundColor) {
    el.style.backgroundColor = `rgb(${backgroundColor}, ${backgroundColor}, ${backgroundColor})`;
    el.style.color = `rgb(${color}, ${color}, ${color})`;
}

function darkMode() {

    for (const element of document.querySelectorAll("#content-main, .selected, #usercontext-bar, .multitabs-common-label")) {
        darkModeStyle(element, 230, 60);
    }

    for (const element of document.querySelectorAll("b")) {
        darkModeStyle(element, 255, 60);
    }

    for (const element of document.querySelectorAll("#branding-powerschool")) {
        darkModeStyle(element, 230, 80);
    }

    for (const element of document.querySelector("#tools").querySelectorAll("li, a")) {
        darkModeStyle(element, 230, 80);
    }

    for (const element of document.querySelectorAll("#nav-main")) {
        darkModeStyle(element, 230, 40);
    }

    for (const element of document.querySelectorAll("#btnContMax")) {
        darkModeStyle(element, 230, 20);
    }

    for (const element of document.querySelectorAll("#btnNoNav")) {
        darkModeStyle(element, 230, 2550);
    }
}

// if mode isn't set yet, set it to light
// if mode is dark, make page dark
if (!(localStorage.getItem("mode"))) {
    localStorage.setItem("mode", "light");
} else if (localStorage.getItem("mode") === "dark") {
    darkMode();
}


browser.runtime.onMessage.addListener(() => {
    if (localStorage.getItem("mode") === "light") {
        localStorage.setItem("mode", "dark");
        darkMode();
    } else {
        localStorage.setItem("mode", "light");
        location.reload();
    }
});