import { BUY_CAKE } from "./cakeTypes";


// Action createer witch returns a object
export const buyCake = (number=1) => {
    return {
        type:BUY_CAKE,
        payload: number
    }
}