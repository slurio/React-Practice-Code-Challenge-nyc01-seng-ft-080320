import React, { Fragment } from 'react'

const Sushi = (props) => {

  function sushiEat() {
    props.eatSushi(props.sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={sushiEat}>
        { 
          props.sushiAte.find(el => el === props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi