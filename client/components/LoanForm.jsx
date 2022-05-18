import React from 'react'
import { FormField, TextInput, Select } from 'grommet'

function LoanForm({loanDetails, setLoanDetails}) {
  const {interestRate, term, loanAmount, paymentFrequency} = loanDetails






  return (
    <div className="form__div">
      <h2>New Loan</h2>
      <form>
        <FormField label="Term">
          <Select options={[1, 2, 3, 4, 5]} defaultValue={1} />
        </FormField>
        <FormField label="Interest Rate">
          <TextInput name='interestRate' value={interestRate}/>
        </FormField>
        <FormField label="Loan Amount">
          <TextInput name='loanAmount' value={loanAmount}/>
        </FormField>
        <FormField label="Payment Frequency">
          <Select
            options={['Weekly', 'Fortnightly', 'Monthly']}
            defaultValue="Weekly"
          />
        </FormField>
        <button className="form__button">View Loan Details</button>
      </form>
    </div>
  )
}

export default LoanForm
