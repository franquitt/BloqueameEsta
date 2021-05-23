chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "desbloquea"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}