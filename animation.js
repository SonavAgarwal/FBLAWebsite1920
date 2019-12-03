
function destroy() {
    setInterval(change,3000);
    console.log("destroying");
    setTimeout(kaBoom, 980);
}

function kaBoom() {
    document.getElementById("intro").style.display = "none";
    console.log("destroyed")
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