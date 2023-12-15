const CONTEXTMENU = {id: "darkMode", title: "Dark Mode ON/OFF"};

browser.contextMenus.create(CONTEXTMENU);

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "darkMode") {
        browser.tabs.sendMessage(tab.id, info);
    }
});