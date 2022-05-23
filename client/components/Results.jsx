import { DataTable, Text } from 'grommet'
import React, { useEffect, useState } from 'react'
import { getLoanRepaymentDetails } from './resultsHelper'

function Results({ loanDetails }) {
  const [loanRepaymentDetails, setLoanRepaymentDetails] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    let startingBalance = loanDetails.loanAmount
    let yearsRemaining = loanDetails.termRemaining

    for (let i = 0; i < loanDetails.duration; i++) {
      let yearRepaymentDetails = getLoanRepaymentDetails(
        loanDetails,
        yearsRemaining,
        startingBalance
      )
      yearRepaymentDetails.loanYear = i + 1
      setLoanRepaymentDetails((prevValue) => [
        ...prevValue,
        yearRepaymentDetails,
      ])
      startingBalance = yearRepaymentDetails.closingBalance
      yearsRemaining--
    }
    setShowResults(true)
  }, [])

  return (
    showResults && (
      <>
        <h2>Loan Summary</h2>
        <div className="loan__summary__div">
          <div className="results__div">
            <p>
              {loanRepaymentDetails[0].paymentFrequency} payment: $
              {loanRepaymentDetails[0].payment.toFixed()}
            </p>
            <p>
              Annual Amount Paid: $
              {loanRepaymentDetails[0].annualCost.toFixed()}
            </p>
          </div>
          <div className="results__div">
            <p>
              Total Amount Paid: $
              {loanRepaymentDetails
                .reduce((prevTotal, year) => prevTotal + year.annualCost, 0)
                .toFixed()}
            </p>
            <p>
              Total Interest Paid: $
              {loanRepaymentDetails
                .reduce((prevTotal, year) => prevTotal + year.interestPaid, 0)
                .toFixed()}
            </p>
            <p>
              Total Principle Paid: $
              {loanRepaymentDetails
                .reduce((prevTotal, year) => prevTotal + year.principlePaid, 0)
                .toFixed()}
            </p>
            <p>
              Total Amount Remaining:{' '}
              {loanRepaymentDetails[
                loanRepaymentDetails.length - 1
              ].closingBalance.toFixed()}
            </p>
          </div>
        </div>
        <div className="results__table__div">
          <DataTable
            columns={[
              {
                property: 'year',
                header: <Text>Year</Text>,
                primary: true,
                align: 'center',
              },
              {
                property: 'interestPaid',
                header: <Text>Interest Paid</Text>,
                align: 'center',
              },
              {
                property: 'principlePaid',
                header: <Text>Principle Paid</Text>,
                align: 'center',
              },
              {
                property: 'closingBalance',
                header: <Text>Balance Remaining</Text>,
                align: 'center',
              },
            ]}
            data={loanRepaymentDetails.map((year) => ({
              year: year.loanYear,
              interestPaid: `$${year.interestPaid.toFixed()}`,
              principlePaid: `$${year.principlePaid.toFixed()}`,
              closingBalance: `$${year.closingBalance.toFixed()}`,
            }))}
          />
          {/* <table>
            <tr>
              <th>Year</th>
              <th>Interest Paid</th>
              <th>Principle Paid</th>
              <th>Remaining Balance</th>
            </tr>
            {loanRepaymentDetails.map((year) => (
              <tr key={year.loanYear}>
                <td>{year.loanYear}</td>
                <td>${year.interestPaid.toFixed()}</td>
                <td>${year.principlePaid.toFixed()}</td>
                <td>${year.closingBalance.toFixed()}</td>
              </tr>
            ))}
          </table> */}
        </div>
      </>
    )
  )
}

export default Results
