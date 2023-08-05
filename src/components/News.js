//import React, { Component } from 'react'
import React,{useEffect,useState}from 'react'

import PropTypes from 'prop-types'

import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


//export  class News extends Component {

const News=(props)=>{

  //in class based comp default and proptypes are written in top
  // static defaultProps={
  //   country:'in',
  //   pageSize:6,
  //   category: 'general',
  // }

  // static propTypes={
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }


 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalResults]=useState(0)


  // constructor runs first then render and used only in class based components
  // constructor(props){
  //   super(props);
  //   console.log(" i am constructor")
  //   this.state={
  //     articles: [],
  //     loading:true,
  //     page:1,
  //     totalResult:0
  //   }
  //   document.title=`${props.category}-News-tk`;
  // }


    // componentDidMount run after render
    // final order constructor then render then cdm
    const updateNews= async()=> {
      props.setProgress(10);
      const url1=`https://newsapi.org/v2/top-headlines?countary=${props.countary}&category=${props.category}&apiKey=b0806bae84974815bef39f38d22691bf&page=${page}&pageSize=${props.pageSize}`
      //this.setState({loading:true});
      setLoading(true)
    let data= await fetch(url1);
    let parsedata= await data.json();
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
    setLoading(false)
    
    // this.setState({articles: parsedata.articles,totalResults: parsedata.totalResults,loading:false})
    props.setProgress(100);
    }


  //  async componentDidMount(){
  //   this.updateNews();
  useEffect(() => {
    updateNews(); 
}, [])
   
  // }
//  const prev= async ()=>{
//  //console.log("previous page");
//  //this.setState({ page: page - 1 });
// setPage(page-1);
//  //this.updateNews();
//  updateNews();
 
//   }

  // const nxt= async ()=>{

  //   //this.setState({ page: page + 1 });
  //   setPage(page + 1);
  //   //this.updateNews()
  // updateNews()
  // console.log("nxt")
  // }


  const fetchMoreData = async () => {   
    setPage(page+1) 
    const url1 = `https://newsapi.org/v2/top-headlines?countary=${props.countary}&category=${props.category}&apiKey=b0806bae84974815bef39f38d22691bf&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url1);
    let parsedata = await data.json()
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)
  };

  
  //render() {
    return (
      <>
      <h2 className='headind d-flex justify-content-center'>Top Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={articles.length}
                    nxt={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
      <div className='container my-3 '>
        <div className='row'>
        { articles.map ((element)=>{

        return <div className='col-md-4 my-4' key={element.url}>
        <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage} news={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        
       {/* <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} type="button" className="btn btn-primary mx-2" onClick={this.prev}>&larr;Previous</button>
        <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-primary mx-2"onClick={this.nxt}>Next &rarr;</button>
      </div> */}
      </div>
      </InfiniteScroll>
      </>
    )
  }
//}
// in function based component defaultprops and propTypes is written at the end
News.defaultProps={
   countary:'in',
   pageSize:6,
   category: "general"
 }

 News.propTypes={
   countary: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string
 }

 export default News
