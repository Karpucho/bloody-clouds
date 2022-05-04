import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/registration', {
      email,
      password,
    })
    alert(response.data.message)
  } catch (error) {
    alert(error.response.data.message)
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {

      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      })
      
      localStorage.setItem('token', response.data.token)
      dispatch(setUser(response.data.user))
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export const auth = () => {
  return async (dispatch) => {
    try {

      const response = await axios.get('http://localhost:5000/api/auth/auth', {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })

      localStorage.setItem('token', response.data.token)
      dispatch(setUser(response.data.user))
    } catch (error) {
      alert(error.response.data.message)
      localStorage.removeItem('token')
    }
  }
}
