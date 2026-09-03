let tour=document.querySelector(".tour")
import { resultat,tableau } from "./script3.js"
let index=0
export function jouer(event){
    
        if(index%2===0){
            tour.innerText="tour joueur 1"
            if(!(event.currentTarget.innerText==="❎" || event.currentTarget.innerText==="⭕"))
                {event.currentTarget.innerText="❎"
                    index++
                    tableau(event.currentTarget.id,1)
                    if(index==5 || index==6)
                    {
                        bool=resultat(1)
                    }

                }
        }
        else{
            tour.innerText="tour joueur 2"
            if(!(event.currentTarget.innerText==="❎" || event.currentTarget.innerText==="⭕"))
                {event.currentTarget.innerText="⭕"
                    index++
                    tableau(event.currentTarget.id,2)
                    if(index==5 || index==6)
                    {
                        bool=resultat(1)
                    }
                }
        }
        
        
}