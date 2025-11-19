import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Elements } from './routes/Router'

const App = () => {
  return (
    <RouterProvider router={Elements}/>
  )
}

export default App
