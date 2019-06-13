
import { ADD, REDUCE } from '../actionType'
const initialState = {
    count: 0
}

export default function (state = initialState, actions) {
    const { count } = state
    switch (actions.type) {
        case ADD: {
            return {
                count: count+1
            }
        }
        case REDUCE: {
            return {
                count: count-1
            }
        }
        default:
            return state
    }

}