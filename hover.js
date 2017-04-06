const doc=document;
let firstdiv=doc.getElementsByClassName("pictures")
firstdiv[0].addEventListener("click",function(){
    if(firstdiv.className =="pictures"){
        firstdiv[0].className="pictures2"
    }
    else{
        firstdiv[0].className="pictures"
    }
})
