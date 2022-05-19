import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoanForm from './LoanForm'
import Results from './Results'

function MainContainer() {
  const [loanDetails, setLoanDetails] = useState({
    term: '',
    īnterestRate: '',
    loanAmount: '',
    duration: 1,
    paymentFrequency: 'Weekly',
  })

  function handleFormChange(e) {
    setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value })
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
            />
          }
        />
        <Route path="/results" element={<Results />} />
      </Routes>
    </main>
  )
}

export default MainContainer
