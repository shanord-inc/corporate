import AppState from '../../services/AppState'

export const addToast = (message: string) => {
  AppState.create().addToast(message)
}

export const removeToast = (message: string) => {
  AppState.create().removeToast(message)
}

export const clearToast = (message: string) => {
  AppState.create().clearToast(message)
}
