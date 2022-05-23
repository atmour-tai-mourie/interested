import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoanForm from './LoanForm'
import Results from './Results'

function MainContainer() {
  const navigate = useNavigate()

  const [loanDetails, setLoanDetails] = useState({
    termRemaining: 1,
    interestRate: '',
    loanAmount: '',
    duration: 1,
    paymentFrequency: 'Weekly',
  })

  function handleFormChange(e) {
    setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value })
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    navigate('/results')
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <LoanForm
              handleFormChange={handleFormChange}
              loanDetails={loanDetails}
              handleFormSubmit={handleFormSubmit}
            />
          }
        />
        <Route
          path="/results"
          element={<Results loanDetails={loanDetails} />}
        />
      </Routes>
    </main>
  )
}

export default MainContainer
