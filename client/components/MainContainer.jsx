import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ForecastForm from './ForecastForm'
import LoanForm from './LoanForm'
import Results from './Results'
import SelectCalculator from './SelectCalculator'

function MainContainer() {
  const navigate = useNavigate()

  const [loanDetails, setLoanDetails] = useState({
    termRemaining: 30,
    interestRate: 3,
    loanAmount: 100000,
    duration: 5,
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
        <Route path="/" element={<SelectCalculator />} />
        <Route
          path="/calc"
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
        <Route path="/forecast" element={<ForecastForm />} />
      </Routes>
    </main>
  )
}

export default MainContainer
