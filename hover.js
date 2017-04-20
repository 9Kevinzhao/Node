
const doc = document;
let firstdiv =doc.querySelector("div.inside")
firstdiv.addEventListener("mouseover",function(){
        firstdiv.className="inside2";
})
firstdiv.addEventListener("mouseout",function(){
        firstdiv.className="inside";

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
