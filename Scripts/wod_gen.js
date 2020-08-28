import random from "./random.js" 

export default function wod_gen(){
    let wodIndex = []
    for ( let i = 0; i < 3; i++){
        let ranWod = random(0, 4)
        if ( ranWod === 0 || !wodIndex.includes(ranWod) ){
            wodIndex.push(ranWod)
        } else {
            i = i - 1
        }
    }
    return wodIndex
}