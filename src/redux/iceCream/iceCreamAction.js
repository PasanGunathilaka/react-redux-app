import { BUY_ICECREAM } from "./iceCreamTypes";


// Action createer witch returns a object
export const buyIceCream = () => {
    return {
        type:BUY_ICECREAM
    }
}