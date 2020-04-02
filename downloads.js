var cachedDls = getCookie("cachedDls");
Object.values(document.getElementsByClassName("downloadcount")).forEach((value, index, array) => {
    if (cachedDls != null) {
        value.innerHTML = cachedDls + "...";
    }
});
getData("https://cors.itsmeow.dev/addons-ecs.forgesvc.net/api/v2/addon/303557", function(response) {
    var data = JSON.parse(response);
    Object.values(document.getElementsByClassName("downloadcount")).forEach((value, index, array) => {
        value.innerHTML = data.downloadCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " downloads";
        setCookie("cachedDls", value.innerHTML, 2147483647);
    });
});

function getData(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.overrideMimeType("application/json");
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}