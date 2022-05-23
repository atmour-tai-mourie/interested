function getYearlyPayments(period) {
  switch (period) {
    case 'Monthly':
      return 12
    case 'Fortnightly':
      return 365 / 14
    case 'Weekly':
      return 365 / 7
    default:
      12
  }
}

function getPeriodInterestRate(interestRate, paymentPeriod) {
  return (
    (1 + interestRate / 100 / 365) ** (365 / getYearlyPayments(paymentPeriod)) -
    1
  )
}

function getRemaingPayments(loanTermRemaining, paymentPeriod) {
  return loanTermRemaining * getYearlyPayments(paymentPeriod)
}

function getPayment(openingBalance, periodInterestRate, remainingPayments) {
  return (
    openingBalance *
    ((periodInterestRate * (1 + periodInterestRate) ** remainingPayments) /
      ((1 + periodInterestRate) ** remainingPayments - 1))
  )
}

function getClosingBalance(
  openingBalance,
  periodInterestRate,
  remainingPayments,
  paymentPeriod
) {
  return (
    (openingBalance *
      ((1 + periodInterestRate) ** remainingPayments -
        (1 + periodInterestRate) ** getYearlyPayments(paymentPeriod))) /
    ((1 + periodInterestRate) ** remainingPayments - 1)
  )
}

function getPrinciplePaid(openingBalance, closingBalance) {
  return openingBalance - closingBalance
}

function getAnnualCost(payment, paymentPeriod) {
  return payment * getYearlyPayments(paymentPeriod)
}

function getInterestpaid(annualCost, principlePaid) {
  return annualCost - principlePaid
}

export function getLoanRepaymentDetails(
  { interestRate, paymentFrequency },
  yearsRemainingOnLoan,
  openingBalance
) {
  const periodInterestRate = getPeriodInterestRate(
    interestRate,
    paymentFrequency
  )
  const remainingPayments = getRemaingPayments(
    yearsRemainingOnLoan,
    paymentFrequency
  )
  const payment = getPayment(
    openingBalance,
    periodInterestRate,
    remainingPayments
  )
  const closingBalance = getClosingBalance(
    openingBalance,
    periodInterestRate,
    remainingPayments,
    paymentFrequency
  )
  const principlePaid = getPrinciplePaid(openingBalance, closingBalance)
  const annualCost = getAnnualCost(payment, paymentFrequency)
  const interestPaid = getInterestpaid(annualCost, principlePaid)
  console.log(
    interestRate,
    paymentFrequency,
    yearsRemainingOnLoan,
    openingBalance,
    getYearlyPayments(paymentFrequency)
  )
  return {
    payment,
    closingBalance,
    principlePaid,
    annualCost,
    interestPaid,
    paymentFrequency,
  }
}
