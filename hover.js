
const doc = document;
let firstdiv =doc.querySelector("div.pictures")
firstdiv.addEventListener("mouseover",function(){

        firstdiv.className="pictures2"
})
firstdiv.addEventListener("mouseout",function(){
    if(firstdiv.className =="pictures2"){
        firstdiv.className="pictures"
    }
})

let seconddiv =doc.querySelector("div.square1")
seconddiv.addEventListener("mouseover",function(){
seconddiv.style.opacity= 0.8;
})

seconddiv.addEventListener("mouseout",function(){
seconddiv.style.opacity= 1;
})

let thirddiv =doc.querySelector("div.square2")
thirddiv.addEventListener("mouseover",function(){
thirddiv.style.opacity= 0.8;
})

thirddiv.addEventListener("mouseout",function(){
thirddiv.style.opacity= 1;
})
