// Saves options to localStorage.
function save() {
    alert(document);
    kk = document.getElementById("back").checked ? "back" : "fore";
    localStorage["position"] = kk;
    ll = document.getElementById("ignore_chrome").checked ? "true" : "false";
    localStorage["ignore_chrome"] = ll;
    jj = document.getElementById("CST").checked ? "true" : "false";
    localStorage["CST"] = jj;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function () {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restore() {
    alert(document);
    kk = localStorage["position"];
    ll = localStorage["ignore_chrome"];
    jj = localStorage["CST"];
    if (kk == "fore") document.getElementById("fore").checked = true;
    else document.getElementById("back").checked = true;
    if (ll == "true") document.getElementById("ignore_chrome").checked = true;
    else document.getElementById("ignore_chrome").checked = false;
    if (jj == "true") document.getElementById("CST").checked = true;
    else document.getElementById("CST").checked = false;
}

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('fore').addEventListener('click', save);
document.getElementById('back').addEventListener('click', save);
document.getElementById('ignore_chrome').addEventListener('click', save);
document.getElementById('CST').addEventListener('click', save);
//document.getElementById('save').addEventListener('click', save);