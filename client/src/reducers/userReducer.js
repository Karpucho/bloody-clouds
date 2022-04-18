const SET_USER = 'SET_USER'
// const SET_IS_FETCHING = 'SET_IS_FETCHING'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_FETCH_ERROR = 'SET_FETCH_ERROR'

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
         currentUser: action.payload.user,
         isAuth: true,
        }

    // case SET_IS_FETCHING:
    //   return {...state, isFetching: action.payload}
    
    // case SET_CURRENT_PAGE:
    //   return {...state, currentPage: action.payload}

    // case SET_FETCH_ERROR:
    //   return {...state, isFetchError: action.payload}

    default:
      return state
  }
}

export const setUser = (user) => ({type: SET_USER, payload: user})
