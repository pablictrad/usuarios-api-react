import { useState, useEffect, useCallback } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null
  })

  const getFetch =  useCallback(async () => {    
   
    try {
      const response = await fetch(url)
      const data = await response.json()

      setState({
        data,
        isLoading: false,
        errors: null
      })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error.message//almacena el mensaje de error
      })
    }
  },[url])

  useEffect( () => {
    if (!url) return
    setState({
      data: null,
      isLoading: true, // Reiniciar el estado de carga al cambiar la URL
      errors: null
    })
    getFetch()
  }, [url, getFetch])

  return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors
  }
}
