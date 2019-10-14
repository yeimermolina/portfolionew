import React from "react"

const Input = ({ isTextArea, rows = 4, name, placeholder }) => {
  if (isTextArea) {
    return (
      <textarea
        className="Input"
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
    )
  }

  return <input className="Input" name={name} placeholder={placeholder} />
}

export default Input
