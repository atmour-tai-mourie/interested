import React from 'react'
import { FormField, TextInput, Select } from 'grommet'

function LoanForm({ handleFormChange, loanDetails }) {
  console.log(loanDetails)
  return (
    <div className="form__div">
      <h2>New Loan</h2>
      <form>
        <FormField label="Loan Duration">
          <Select
            onChange={handleFormChange}
            name="duration"
            options={[1, 2, 3, 4, 5]}
            defaultValue={loanDetails.duration}
          />
        </FormField>
        <FormField label="Interest Rate">
          <TextInput
            type="number"
            icon="% p.a."
            reverse
            onChange={handleFormChange}
            name="interestRate"
            value={loanDetails.interestRate}
          />
        </FormField>
        <FormField label="Loan Amount">
          <TextInput
            type="number"
            icon="$"
            onChange={handleFormChange}
            name="loanAmount"
            value={loanDetails.loanAmount}
          />
        </FormField>
        <FormField label="Remaining Loan Term">
          <TextInput
            type="number"
            onChange={handleFormChange}
            name="term"
            value={loanDetails.term}
          />
        </FormField>
        <FormField label="Payment Frequency">
          <Select
            onChange={handleFormChange}
            name="paymentFrequency"
            options={['Weekly', 'Fortnightly', 'Monthly']}
            defaultValue={loanDetails.paymentFrequency}
          />
        </FormField>
        <button className="form__button">View Loan Details</button>
      </form>
    </div>
  )
}

export default LoanForm
