chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = "";
    if (tab.url.includes("clarin.com"))
        msg = {
            txt: "clarin"
        }
    chrome.tabs.sendMessage(tab.id, msg)
}
