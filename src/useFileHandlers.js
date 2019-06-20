import { useCallback, useReducer } from 'react';

const LOADED = 'LOADED'
const INIT = 'INIT'
const PENDING = 'PENDING'
const FILES_UPLOADED = 'FILES_UPLOADED'
const UPLOAD_ERROR = 'UPLOAD_ERROR'

const initialState = {
  files: [],
  pending: [],
  next: null,
  uploading: false,
  uploaded: {},
  status: 'idle',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return { ...state, files: action.files, status: LOADED }
    default:
      return state
  }
}

const useFileHandlers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
   if (e.target.files.length) {
     const arrFiles = Array.from(e.target.files)
     const files = arrFiles.map((file, index) => {
       const src = window.URL.createObjectURL(file)
       return { file, id: index, src }
     })
     dispatch({ type: 'load', files })
   }
  }
  return {}
}

export default useFileHandlers












