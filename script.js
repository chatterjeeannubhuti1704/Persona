let SmallSide= document.getElementById("SmallSide");
let sideBar=document.getElementById("sideBar");
let SmallSideShow=true;
function callSmallSide(){
    console.log("infun")
 if(SmallSideShow){
    SmallSide.style.display="block";
    SmallSideShow=false;
 }
 else{
    SmallSide.style.display="none";
    SmallSideShow=true;
 }
}
function callsideBar(){

      sideBar.style.display="block";
}
function closesideBar(){

   sideBar.style.display="none";
}
function closesmallsideBar(){
   SmallSide.style.display="none";
}