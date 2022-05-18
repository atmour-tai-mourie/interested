import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react/cjs/react.production.min'
import LoanForm from './LoanForm'
import Results from './Results'

function MainContainer() {
  const [loanDetails, setLoanDetails] = useState({})

  return (
    <main>
      <Routes>
        <Route path="/" content={<LoanForm />} />
        <Route path="/results" content={<Results />} />
      </Routes>
    </main>
  )
}

export default MainContainer
