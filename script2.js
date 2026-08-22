let tour=document.querySelector(".tour")
let index=0
export function jouer(event){
    
        if(index%2===0){
            tour.innerText="tour joueur 1"
            if(!(event.currentTarget.innerText==="❎" || event.currentTarget.innerText==="⭕"))
                {event.currentTarget.innerText="❎"
                    index++
                }
        }
        else{
            tour.innerText="tour joueur 2"
            if(!(event.currentTarget.innerText==="❎" || event.currentTarget.innerText==="⭕"))
                {event.currentTarget.innerText="⭕"
                    index++
                }
        }
        
        
}