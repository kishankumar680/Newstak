//import React, { Component } from 'react'
import React from 'react'

//export class Newsitem extends Component {
  const Newsitem = (props)=>{
  //render() {
    //let {title,description,url,news}=this.props;
    let {title,description,url,news,author,date,source}=props;
    return (
      <div className="my-3">
        <div className='card'>
          <div style={{
            display: 'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }
          }>
        
        <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>
        {/* <div  className="card" style={{width: "18rem"}}> */}
  <img src={!url ? "https://st.depositphotos.com/1074452/4544/i/950/depositphotos_45442867-stock-photo-news-dice-show-coverage-of.jpg" : url}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}...</h5>
    <p  className="card-text">{description}...</p>
    <p  className="card-text"><small className='text-muted'>By {!author ? "Unknown" :author} on {new Date(date).toGMTString()}</small></p>
    <a href={news}  className="btn btn-primary">Read more...</a>
  </div>
</div>
      </div>
    )
  }
//}

export default Newsitem
