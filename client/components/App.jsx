import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import LoanForm from './LoanForm'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <LoanForm />
      </div>
    </>
  )
}

export default App
