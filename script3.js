let table = [[0,0,0],[0,0,0],[0,0,0]];
function tableau(coord,tour)
{
   table[Number(coord[0])][Number(coord[1])]=tour

}

function resultat(tour){
    for (let i=0,j = 0; i < 3 && j<3; i++ ,j++ ) {
           
            if (table[i][0]===tour && table[i][1]===tour && table[i][2]===tour)
            {
                return true
            }

            if (table[0][j]===tour && table[1][j]===tour && table[2][j]===tour)
            {
                return true
            }

            if (table[i][j]===tour && table[i][j]===tour && table[i][j]===tour)
            {
                return true
            }

            else
            {
                return false
            }
        
    }
}

export {resultat,tableau}