import axios from 'axios';
import { setFiles } from '../reducers/fileReducer';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/files${dirId ? '?parent=' + dirId : ''}`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      }) // возможно слэш нужен после files
      // alert(response.data.message)
      dispatch(setFiles(response.data))
      // localStorage.setItem('token', response.data.token)
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}
