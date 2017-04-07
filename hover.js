function functionName() {

}
const doc = document;
let firstdiv =doc.querySelector("div.pictures")
firstdiv[0].addEventListener("click",function(){
    if(firstdiv.className =="pictures"){
        firstdiv[0].className="pictures2"
    }
    else{
        firstdiv[0].className="pictures"
    }
})
