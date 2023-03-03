import React from 'react'

const DateInput = ({tag, label, updateInputResponses}) => {


    return (
        <div>
            <h2>{label}</h2>
            <input required type="datetime-local" onChange={(e) => updateInputResponses(tag, e.target.value)}/>
        </div>
      )
}

export default DateInput