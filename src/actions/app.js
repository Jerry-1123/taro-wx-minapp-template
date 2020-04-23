import {
    CONFIG
} from '@/constants/app'

export const dispatchConfig = () => {
    return async dispatch => {
        dispatch({
            type: CONFIG
        })
    }
}