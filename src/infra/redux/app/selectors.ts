import {State} from '../'

const getState = (state: State) => state.app
export const getToast = (state: State) => getState(state).toast
export const getBusy = (state: State) => getState(state).busy
export const getNewsPage = (state: State) => getState(state).newsPage
export const getWorkPage = (state: State) => getState(state).workPage
