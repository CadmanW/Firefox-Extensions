const contextMenu = {id: "addData", title: "Add team data to panel"};

browser.contextMenus.create(contextMenu);

browser.contextMenus.onClicked.addListener((info, tab) => {
    console.log(tab);
    if (info.menuItemId === "addData") {
        browser.tabs.sendMessage(tab.id, info);
    }
});