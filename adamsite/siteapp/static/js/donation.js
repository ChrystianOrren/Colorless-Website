function showDonate() {
    var donBut = document.getElementById("donate");
    donBut.style.display = "none";
    var donDiv = document.getElementById("don-div");
    donDiv.style.display = "block";
}

function goToKofi() {
    var url = "https://ko-fi.com/colorlessthegame#tier17190085272010";
    var win = window.open(url, '_blank');
    win.focus();
}

function goToPayPal() {
    var url = "https://paypal.me/AdamBaj";
    var win = window.open(url, '_blank');
    win.focus();
}