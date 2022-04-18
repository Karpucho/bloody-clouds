const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'

const defaultState = {
  currentUser: {},
  isAuth: false,
}

export default function userReducer(state = defaultState, action) {
  // console.log(action.payload, 'ЭКШН В РЕДЬЮС');
  switch (action.type) {
   
    case SET_USER:
      return {
        ...state,
         currentUser: action.payload,
         isAuth: true,
        }

    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
         currentUser: {},
         isAuth: false,
        }
    
    // case SET_CURRENT_PAGE:
    //   return {...state, currentPage: action.payload}

    // case SET_FETCH_ERROR:
    //   return {...state, isFetchError: action.payload}

    default:
      return state
  }
}

export const setUser = (user) => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
