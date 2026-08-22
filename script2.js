let tour=document.getElementsByClassName("tour")
export function jouer(event){
    for (let index = 0; index < 6; index++) {
        if(index%2===0){
            tour.innetText="tour joueur 1"
            event.currentTarget.innetText="❎"
        }
        else{
            tour.innetText="tour joueur 2"
            event.currentTarget.innetText="⭕"
        }
        
    }
}