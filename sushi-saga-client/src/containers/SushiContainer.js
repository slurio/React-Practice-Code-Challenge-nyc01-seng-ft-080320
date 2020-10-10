import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  function displaySushi() {
    return props.sushiArray.map(el => < Sushi sushiAte={props.sushiAte} eatSushi={props.eatSushi} key={el.id} sushi={el}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {displaySushi()}
        <MoreButton clickHandler={props.clickHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer