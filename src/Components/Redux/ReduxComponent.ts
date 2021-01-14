import { Action, ADD_TO_BASKET } from './action'

export interface BasketState {
    basket: string[],
}

const initialState: BasketState = {
    basket: [],
}



export const BasketReducer = (state: BasketState = initialState, action: Action) => {
    switch (action.type) {

        case ADD_TO_BASKET:
            return {
                ...state, basket: { ...state.basket, action },
            }

        default:
            return state;
    }
}