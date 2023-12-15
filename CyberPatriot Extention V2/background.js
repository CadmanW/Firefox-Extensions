const CONTEXTMENU = {id: "addData", title: "Add team data to panel"};

browser.contextMenus.create(CONTEXTMENU);

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addData") {
        browser.tabs.sendMessage(tab.id, info);
    }
});