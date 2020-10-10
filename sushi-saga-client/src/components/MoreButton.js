import React from 'react'

const MoreButton = (props) => {

  function clickHandler() {
    props.clickHandler()
  }

    return <button onClick={clickHandler}>
            More sushi!
          </button>
}

export default MoreButton