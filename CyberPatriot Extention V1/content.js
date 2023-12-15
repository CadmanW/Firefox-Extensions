function initPanel() {
    // Move the main page to the left to make room for the panel
    const mainEl = document.querySelectorAll(".main")[1];
    mainEl.style.margin = "0px 0px 0px 30px";
    mainEl.style.float = "left";
    mainEl.style.width = "700px";

    // Create the panel then append it to the document
    const height = (document.body.scrollHeight - 179).toString() + "px";
    let generateTime = document.querySelector("h4").textContent;

    const panelEl = document.createElement("div");
    panelEl.id = "06132007";
    panelEl.style.minHeight = height;
    panelEl.style.width = "1110px";
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
    titleEl.appendChild(generateTimeEl);
    mainEl.insertAdjacentElement("afterend", panelEl);
}

function addIFrame(url) {
    const panelEl = document.getElementById("06132007");

    // Create the iframe then append it to he panel
    const containerEl = document.createElement("div");
    containerEl.style.height = "660px";
    containerEl.style.width = "895px";
    containerEl.style.boxSizing = "border-box";
    containerEl.style.border = "solid 2px rgb(60, 60, 60)";
    containerEl.style.borderTop = "solid 8px rgb(60, 60, 60)";
    containerEl.style.display = "inline-block";
    containerEl.style.resize = "both";
    containerEl.style.overflow = "hidden";

    const iframeEl = document.createElement("iframe");
    iframeEl.width = "1920";
    iframeEl.height = "1080";
    iframeEl.src = url;
    iframeEl.scrolling = "no";
    iframeEl.style.position = "relative";
    iframeEl.style.bottom = "420px";
    iframeEl.style.right = "508px";
    // iframeEl.style.transform = "translate(-505px, -420px)";
    iframeEl.style.transformOrigin = "510px 421px";

    containerEl.appendChild(iframeEl);
    panelEl.appendChild(containerEl);

    resizeObserver.observe(containerEl);
};

// Make the browser ask for confirmation before reloading
window.addEventListener("beforeunload", event => {
    event.preventDefault();
});

initPanel();

browser.runtime.onMessage.addListener((msg) => {
    let info = msg;
    if (info.menuItemId === "addData") addIFrame(info.linkUrl);
});

const resizeObserver = new ResizeObserver(entries => {
    const target = entries[0].target;
    const iframe = target.children[0];
    const height = entries[0].contentRect.height;
    const width = entries[0].contentRect.width;

    const heightScale = height / 655; // 655 is initial height of the iframe
    const widthScale = width / 890; // 895 is initial width of the iframe

    iframe.style.transform = `scale(${widthScale}, ${heightScale})`;
});