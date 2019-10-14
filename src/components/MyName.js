import React from "react"

const MyName = ({ isMain }) => {
  if (isMain) {
    return (
      <h1 className="MyName MyName__main">
        YEIMER <br /> MOLINA
      </h1>
    )
  }

  return (
    <h3 className="MyName">
      YEIMER <br /> MOLINA
    </h3>
  )
}

export default MyName
