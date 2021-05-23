chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    let mensaje = message.txt;

    if (mensaje === "desbloquea") {

        document.getElementsByTagName("html")[0].style["overflow-y"] = "scroll";

        let opacidad = document.getElementsByClassName("mainPage");
        if (opacidad != null) {
            opacidad[0].style["opacity"] = "1";

        }

        let a = document.getElementsByClassName("modal-pase");

        while (a[0]) {
            a[0].remove();
        }


    }
}