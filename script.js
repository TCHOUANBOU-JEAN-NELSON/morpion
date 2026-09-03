import * as script2 from "./script2.js"
let zones=document.querySelectorAll("td")
let table = [[],[],[]];
zones.forEach((zone)=>{
    zone.addEventListener("click",function(event){
        event.stopPropagation()
        script2.jouer(event)

    })
})

