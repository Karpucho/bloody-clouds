// const SET_REPOS = 'SET_REPOS'
// const SET_IS_FETCHING = 'SET_IS_FETCHING'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_FETCH_ERROR = 'SET_FETCH_ERROR'

const defaultState = {

}

export default function fileReducer(state = defaultState, action) {
  // console.log(action.payload, 'ЭКШН В РЕДЬЮС');
  switch (action.type) {
   
    // case SET_REPOS:
    //   return {
    //     ...state,
    //      items: action.payload.items,
    //      totalCount: action.payload.total_count,
    //      isFetching: false,
    //     }

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
