import { Button } from 'grommet'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SelectCalculator() {
  const nagigate = useNavigate()
  return (
    <>
      <h2>Select Calculator</h2>
      <Button
        primary
        label="Fixed Term Calculator"
        onClick={() => nagigate('/calc')}
        margin="small"
      />
      <Button
        primary
        label="Forecast Calculator"
        onClick={() => nagigate('/forecast')}
        margin="small"
      />
    </>
  )
}

export default SelectCalculator
