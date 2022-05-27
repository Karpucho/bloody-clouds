import axios from 'axios';
import { setUser } from '../reducers/userReducer';
import {API_URL} from '../config'

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/registration`, {
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

      const response = await axios.post(`${API_URL}api/auth/login`, {
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

      if (localStorage.getItem('token')) {
        const response = await axios.get(`${API_URL}api/auth/auth`, {
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        localStorage.setItem('token', response.data.token)
        dispatch(setUser(response.data.user))
      } else {
        console.log('токена нет'); // доделать сюда else
      }

    } catch (error) {
      alert(error.response.data.message) // убрать из консоли, придумать что то с ошибкой
      localStorage.removeItem('token')
    }
  }
}

export const uploadAvatar = (file) => {
  return async (dispatch) => {
    try {

      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post(`${API_URL}api/files/avatar`, formData, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })

      dispatch(setUser(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteAvatar = () => {
  return async (dispatch) => {
    try {

      const response = await axios.delete(`${API_URL}api/files/avatar`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })

      dispatch(setUser(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}
