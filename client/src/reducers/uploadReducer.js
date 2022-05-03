const SHOW_UPLOADER = 'SHOW_UPLOADER'
const HIDE_UPLOADER = 'HIDE_UPLOADER'
const ADD_UPLOAD_FILE = 'ADD_UPLOAD_FILE'
const REMOVE_UPLOAD_FILE = 'REMOVE_UPLOAD_FILE'
const CHANGE_UPLOAD_FILE = 'CHANGE_UPLOAD_FILE'

const defaultState = {
  isVisible: true,
  files: [],
}

export default function userReducer(state = defaultState, action) {
  // console.log(action.payload, 'ЭКШН В РЕДЬЮС');
  switch (action.type) {
   
    case SHOW_UPLOADER:
      return {...state, isVisible: true}

    case HIDE_UPLOADER:
      return {...state, isVisible: false}

    case ADD_UPLOAD_FILE:
      return {...state, isVisible: false}

    default:
      return state
  }
}

export const setUser = (user) => ({type: SET_USER, payload: user})
