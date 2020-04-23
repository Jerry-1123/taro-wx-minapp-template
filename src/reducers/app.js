import {
    CONFIG
} from '@/constants/app'

const INITIAL_STATE = {
    
}

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONFIG:
            return {
                ...state
            }
        default:
            return state
    }
}
