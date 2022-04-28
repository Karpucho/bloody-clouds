import axios from 'axios';
import { addFile, setFiles, setPopupDisplay } from '../reducers/fileReducer';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {

      const response = await axios.get(`http://localhost:5000/api/files${dirId ? '?parent=' + dirId : ''}`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      }) // возможно слэш нужен после files

      dispatch(setFiles(response.data))

    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export const createDir = (dirId, name) => {
  return async (dispatch) => {
    try {

      const response = await axios.post(`http://localhost:5000/api/files`, {
        name,
        parent: dirId,
        type: 'dir',
      }, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })

      dispatch(addFile(response.data))
      dispatch(setPopupDisplay('none'))

    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export const uploadFile = (file, dirId) => {
  return async (dispatch) => {
    try {

      const formData = new FormData()
      formData.append('file', file)

      if (dirId) {
        formData.append('parent', dirId)
      }

      const response = await axios.post(`http://localhost:5000/api/files/upload`, formData, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
          console.log(totalLength, 'TOTAL LENGTH');
          if (totalLength) {
            let progress = Math.round((progressEvent.loaded * 100) / totalLength)
            console.log(progress);
          }
        }
      })

      dispatch(addFile(response.data))
      // dispatch(setPopupDisplay('none'))

    } catch (error) {
      alert(error.response.data.message)
    }
  }
}
