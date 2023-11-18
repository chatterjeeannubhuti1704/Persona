let SmallSide= document.getElementById("SmallSide");
console.log(SmallSide)
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