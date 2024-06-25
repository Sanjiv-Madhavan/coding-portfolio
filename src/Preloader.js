import React from 'react'


export default function Preloader(props) {

  return (
       props.load ? <div
       id = "preloader"
       size="40"
       bg-opacity="0.1"
       speed="1.75" 
       color="black" 
     ></div> : <div></div>
  )
}
