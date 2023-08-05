import React from 'react'

import Spin from './Spin.gif'
//export default class Spinner extends Component {
  const Spinner=()=>{
  //render() {
    return (
      <div className='d-flex justify-content-center'>
       <img src={Spin} alt="load"></img> 
      </div>
    )
  }
//}
export default Spinner

