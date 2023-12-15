function initPanel() {
    // Move the main page to the left to make room for the panel
    const mainEl = document.querySelectorAll(".main")[1];
    mainEl.style.margin = "0px 0px 0px 30px";
    mainEl.style.float = "left";
    mainEl.style.width = "50%";

    // Create the panel then append it to the document
    const height = (document.body.scrollHeight - 180).toString() + "px";
    let generateTime = document.querySelector("h4").textContent;

    const panelEl = document.createElement("div");
    panelEl.id = "06132007";
    panelEl.style.minHeight = height;
    panelEl.style.width = "43%";
    panelEl.style.backgroundColor = "white";
    panelEl.style.float = "right";
    panelEl.style.margin = "0px 30px 0px 0px";
    panelEl.style.padding = "16px";
    panelEl.style.boxShadow = "0px 0px 8px #002346";

    const titleEl = document.createElement("h2");
    titleEl.textContent = "CyberPatriot CCS Scoreboard Coaches' Assistant";
    titleEl.style.color = "#212529";

    const generateTimeEl = document.createElement("h4");
    generateTimeEl.textContent = generateTime;

    panelEl.appendChild(titleEl);
    panelEl.appendChild(generateTimeEl);
    mainEl.insertAdjacentElement("afterend", panelEl);
}

function getGraph(DOM) {
    const container = document.createElement("div");
    const svg = DOM.querySelector("svg");

    container.id = "char_div";

    container.appendChild(svg);

    return container;
}

function getData(url) {
    fetch(url, {"method": "GET"}).then(re => {return re.text()}).then(html => {
        const document2 = new DOMParser().parseFromString(html, "text/html");
        const panel = document.querySelector("div[id='06132007']");
        const dataEl = document2.querySelector("div[class='container-fluid']");
        const graph = getGraph(document2);

        dataEl.querySelector(".disclaimer").remove();
        dataEl.querySelector(".chart").remove();

        const containerEl = document2.createElement("div");
        containerEl.id = id;
        id++;
        containerEl.style.boxSizing = "border-box";
        containerEl.style.border = "solid 2px rgb(60, 60, 60)";
        containerEl.style.borderTop = "solid 10px rgb(40, 40, 40)";

        dataEl.appendChild(graph);
        containerEl.appendChild(dataEl);
        panel.appendChild(containerEl);
    });
}

initPanel();

let id = 0;
browser.runtime.onMessage.addListener((msg) => {
    let info = msg;
    if (info.menuItemId === "addData") getData(info.linkUrl);
});