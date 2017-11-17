import {State} from '..'

const getState = (state: State) => state.form
export const getContact = (state: State) => getState(state).contactForm
