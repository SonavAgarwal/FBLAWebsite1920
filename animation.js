function destroy() {
    console.log("destroying");
    setTimeout(kaBoom, 980);
}

function kaBoom() {
    document.getElementById("intro").style.display = "none";
    console.log("destroyed")
}