var scrollTop = 0;
var width = screen.width;
setInterval(checkScroll,20);

function checkScroll(){
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    document.getElementById("jj").innerHTML = screen.height;
    if(scrollTop>1750){
        //console.log(document.getElementById("header").style.top);
        document.getElementById("header").style.top = (1750-scrollTop)/3+"%";
    }
    if(scrollTop<1750){
        document.getElementById("header").style.top = 0+"%";

    }
    if(scrollTop>1800){
        console.log(document.getElementById("moveDiv1").style.zindex);
        document.getElementById("moveDiv1").style.position = "fixed";
        document.getElementById("moveDiv1").style.top = 0+"%";
        document.getElementById("moveDiv1").style.zindex = 4;
    }
    if(scrollTop<1800){
        document.getElementById("moveDiv1").style.position = "static";
    }
    if(scrollTop>2100 && scrollTop<2200){
        document.getElementById("moveDiv2").style.position = "fixed";
        document.getElementById("moveDiv2").style.top = 100+"%";
        document.getElementById("moveDiv2").style.zindex = 5;

    }
    if(scrollTop>2200){
        console.log(document.getElementById("moveDiv2").style.top)
        document.getElementById("moveDiv2").style.top = 100-(scrollTop-2200)/3+"%";
        if(parseFloat(document.getElementById("moveDiv2").style.top)<0){
            document.getElementById("moveDiv2").style.top = 0+"%";
        }
    }
}
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