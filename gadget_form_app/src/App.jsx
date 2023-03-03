import { useState, useEffect } from 'react'
import template from './schema'
import TextInput from '../components/TextInput'
import DateInput from '../components/DateInput'
import RadioInput from '../components/RadioInput'
import './App.css'

const { form, paragraphs } = template

function App() {

  const [inputResponses, setInputResponses] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [generatedParagraph, setGeneratedParagraph] = useState("")
  const [generated, setGenerated] = useState(false)

  useEffect(() => {
    for (let input of form) {
      setInputResponses((prev) => {
        const placeholder = { ...prev }
        placeholder[input.tag] = ""
        return placeholder
      })
    }
    setIsLoading(false)
  }, [])

  const updateInputResponses = (tag, input) => {
    setInputResponses((prev) => {
      const placeholder = { ...prev }
      placeholder[tag] = input
      return placeholder
    })
  }

  const generateParagraph = (e) => {
    e.preventDefault()
    let placeholderParagraph = ""
    for (const property in paragraphs) {
      const randNumber = Math.floor(Math.random() * paragraphs[property].length)
      const option = paragraphs[property][randNumber]
      placeholderParagraph = placeholderParagraph + option
    }
    for (let input of form) {
      const replaceRegex = new RegExp(input.tag, "g")
      if (input.type === "date") {
        const date = new Date(inputResponses[input.tag])
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const dateString = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at 
        ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes() < 10 ? "0" + String(date.getMinutes()) : date.getMinutes()} ${date.getHours() > 11 ? "PM" : "AM"}`
        placeholderParagraph = placeholderParagraph.replace(replaceRegex, dateString)
      } else {
        placeholderParagraph = placeholderParagraph.replace(replaceRegex, inputResponses[input.tag])
      }
    }
    setGeneratedParagraph(placeholderParagraph)
    setGenerated(true)
  }

  const formInputElements = form.map((input) => {
    if (input.type === "text") {
      return <TextInput tag={input.tag} label={input.label} updateInputResponses={updateInputResponses} value={inputResponses[input.tag]} key={input.label} />
    } else if (input.type === "date") {
      return <DateInput tag={input.tag} label={input.label} updateInputResponses={updateInputResponses} key={input.label} />
    } else if (input.type === "radio") {
      return <RadioInput tag={input.tag} label={input.label} values={input.values} value={inputResponses[input.tag]} updateInputResponses={updateInputResponses} key={input.label} />
    }
  })

  return (
    <div className="main_container">
      {!isLoading ? <form className="App" onSubmit={(e) => generateParagraph(e)}>
        {
          formInputElements
        }
        <input type="submit" value='Generate' />
      </form> :
        <div></div>
      }
      <h3>{generated && generatedParagraph}</h3>
    </div>
  )
}

export default App
