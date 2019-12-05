
function destroy() {
    console.log("destroying");
    setTimeout(kaBoom, 980);
}

function kaBoom() {
    document.getElementById("intro").style.display = "none";
    console.log("destroyed")
    setTimeout(start,500);

}

function start(){
    setInterval(change,7000);
}

function change(){
    if(document.getElementById("slideshow3").className == "appear"){
        console.log("test");
        document.getElementById("slideshow3").className = "fade";
        document.getElementById("slideshow1").className = "appear";
    }else if(document.getElementById("slideshow2").className == "appear"){
        console.log("test");

        document.getElementById("slideshow2").className = "fade";
        document.getElementById("slideshow3").className = "appear";
    }else if(document.getElementById("slideshow1").className == "appear"){
        console.log("test");

        document.getElementById("slideshow1").className = "fade";
        document.getElementById("slideshow2").className = "appear";
    }
}