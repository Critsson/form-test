import React from 'react'

const TextInput = ({tag, label, updateInputResponses, value}) => {
  
  return (
    <div>
        <h2>{label}</h2>
        <input required type="text" value={value} onChange={(e) => updateInputResponses(tag, e.target.value)}/>
    </div>
  )
}

export default TextInput