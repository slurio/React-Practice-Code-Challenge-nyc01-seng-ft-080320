import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={x.id} style={{ top: -7 * index }}/>
    })
  }

  // function renderWallet() {
  //   debugger
  //   let sum = props.sushiAte.reduce(function (a,b) {return a.price +b.price}, 0)
  //   // return props.wallet
  //   console.log(sum)
  // }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushiAte)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table