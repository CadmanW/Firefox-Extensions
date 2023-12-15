function darkModeStyle(el, color, backgroundColor) {
    el.style.backgroundColor = `rgb(${backgroundColor}, ${backgroundColor}, ${backgroundColor})`;
    el.style.color = `rgb(${color}, ${color}, ${color})`;
}

function darkMode() {

    document.querySelector("#content").style.backgroundColor = "rgb(60, 60, 60)";
    darkModeStyle(document.querySelector("#attByClass"), 200, 70);

    for (const element of document.querySelectorAll("#content-main, .selected, #usercontext-bar, .multitabs-common-label")) {
        darkModeStyle(element, 200, 60);
    }

    for (const element of document.querySelectorAll("b")) {
        darkModeStyle(element, 255, 60);
    }

    for (const element of document.querySelectorAll("#branding-powerschool")) {
        darkModeStyle(element, 200, 80);
    }

    for (const element of document.querySelector("#tools").querySelectorAll("li, a")) {
        darkModeStyle(element, 200, 80);
    }

    for (const element of document.querySelectorAll("#nav-main")) {
        darkModeStyle(element, 200, 50);
    }

    for (const element of document.querySelectorAll("#btnContMax")) {
        darkModeStyle(element, 200, 30);
    }

    for (const element of document.querySelectorAll("#btnNoNav")) {
        darkModeStyle(element, 200, 255);
    }

    for (const element of document.querySelector("#nav-main").querySelectorAll("a")) {
        console.log(element);
        element.style.color = "rgb(200, 200, 200)";
    }

    for (const element of document.querySelectorAll("th")) {
        darkModeStyle(element, 200, 70);
        for (const anchorEl of element.querySelectorAll("a")) {
            darkModeStyle(anchorEl, 200, 80)
        }
    }

    for (const element of document.querySelectorAll("td")) {
        darkModeStyle(element, 200, 80);
        for (const anchorEl of element.querySelectorAll("a")) {
            darkModeStyle(anchorEl, 200, 80)
        }
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