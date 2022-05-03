import React from 'react'
import { FormField, TextInput, Select } from 'grommet'

function LoanForm() {
  return (
    <div>
      <h2>New Loan</h2>
      <form>
        <FormField label="Term">
          <Select options={[1, 2, 3, 4, 5]} defaultValue={1} />
        </FormField>
        <FormField label="Interest Rate">
          <TextInput />
        </FormField>
        <FormField label="Loan Amount">
          <TextInput />
        </FormField>
        <FormField label="Payment Frequency">
          <Select
            options={['Weekly', 'Fortnightly', 'Monthly']}
            defaultValue="Weekly"
          />
        </FormField>
      </form>
    </div>
  )
}

export default LoanForm
