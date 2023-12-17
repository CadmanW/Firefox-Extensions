function initPanel() {
    // Move the main page to the left to make room for the panel
    const mainEl = document.querySelectorAll(".main")[1];
    mainEl.style.margin = "0";
    mainEl.style.width = "fit-content";
    mainEl.style.display = "inline-block";


    // Create the panel then append it to the document
    const height = (parseFloat(document.body.scrollHeight) - 180.0).toString() + "px";
    const mainElWidth = parseFloat(window.getComputedStyle(mainEl).width.slice(0, -2));
    const vw = parseFloat(window.innerWidth);
    const width = (vw - 15.0 - mainElWidth).toString() + "px";
    let generateTime = document.querySelector("h4").textContent;

    const panelEl = document.createElement("div");
    panelEl.id = "06132007";
    panelEl.style.minHeight = height;
    panelEl.style.width = width;
    panelEl.style.backgroundColor = "white";
    panelEl.style.marginLeft = "15px";
    panelEl.style.padding = "15px";
    panelEl.style.boxShadow = "0px 0px 8px #002346";
    panelEl.style.display = "inline-block";
    panelEl.style.float = "right";
    const titleEl = document.createElement("h2");
    titleEl.textContent = "CyberPatriot CCS Scoreboard Coaches' Assistant";
    titleEl.style.color = "#212529";

    const generateTimeEl = document.createElement("h4");
    generateTimeEl.textContent = generateTime;

    panelEl.appendChild(titleEl);
    panelEl.appendChild(generateTimeEl);
    mainEl.insertAdjacentElement("afterend", panelEl);
}

let id = 0;
function getData(url) {
    fetch(url, {"method": "GET"}).then(re => {return re.text()}).then(html => {
        const document2 = new DOMParser().parseFromString(html, "text/html");
        setTimeout(() => {
            const panel = document.querySelector("div[id='06132007']");
            const table1 = document2.querySelector("div[class='card-body p-1']");
            const table2 = document2.querySelector("div[class='card-body p-1']");
            const graph = document2.querySelector("svg");

            console.log(document2.querySelector("svg"));
            console.log(graph);

            const containerEl = document2.createElement("div");
            containerEl.id = id;
            id++;
            containerEl.style.boxSizing = "border-box";
            containerEl.style.border = "solid 2px rgb(60, 60, 60)";
            containerEl.style.borderTop = "solid 10px rgb(40, 40, 40)";

            containerEl.appendChild(table1);
            containerEl.appendChild(table2);
            containerEl.appendChild(graph);
            panel.appendChild(containerEl);
        }, 1000);
    });
}

initPanel();

browser.runtime.onMessage.addListener((msg) => {
    let info = msg;
    if (info.menuItemId === "addData") getData(info.linkUrl);
});