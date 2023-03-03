import React from 'react'

const RadioInput = ({ tag, label, updateInputResponses, values, value }) => {

    const radioInputElements = values.map((valuesValue) => {
        return (
            <>
                <input required type="radio" id={valuesValue} name={tag} value={valuesValue} checked={valuesValue === value} onChange={() => updateInputResponses(tag, valuesValue)} />
                <label style={{marginRight: "1vw"}} htmlFor={valuesValue}>{valuesValue}</label>
            </>
        )

    })

    return (
        <div>
            <h2>{label}</h2>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: ".2vw"}}>
                {
                    radioInputElements
                }
            </div>
        </div>
    )
}

export default RadioInput