import axios from 'axios';
import { addFile, deleteFileAction, setFiles, setPopupDisplay } from '../reducers/fileReducer';

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
            console.log(progress, "PROGRESS");
          }
        }
      })

      dispatch(addFile(response.data))

    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export async function downloadFile(file) {

  const response = await fetch(`http://localhost:5000/api/files/download?id=${file._id}`, {
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })

  if (response.ok) { // возможно поменять на response.status === 200
    // console.log(response, 'РЕСПОНС НА КЛИЕНТЕ');
    const blob = await response.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = file.name
    document.body.appendChild(link)
    link.click();
    link.remove();
  }
}

export const deleteFile = (file) => {
  return async (dispatch) => {
    try {

      const response = await axios.delete(`http://localhost:5000/api/files?id=${file._id}`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })

      dispatch(deleteFileAction(file._id))
      alert(response.data.message)

    } catch (error) {
      alert(error.response.data.message)
    }
  }
}
