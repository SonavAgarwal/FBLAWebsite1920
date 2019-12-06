
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
    setInterval(change,5000);
}

function change(){
    console.log("hello");
    if(document.getElementById("slideshow3").className == "appear slideshow"){
        console.log("test");
        document.getElementById("slideshow3").className = "fade slideshow";
        document.getElementById("slideshow1").className = "appear slideshow";
    }else if(document.getElementById("slideshow2").className == "appear slideshow"){
        console.log("test");

        document.getElementById("slideshow2").className = "fade slideshow";
        document.getElementById("slideshow3").className = "appear slideshow";
    }else if(document.getElementById("slideshow1").className == "appear slideshow"){
        console.log("test");

        document.getElementById("slideshow1").className = "fade slideshow";
        document.getElementById("slideshow2").className = "appear slideshow";
    }
}