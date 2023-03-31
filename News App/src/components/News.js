import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
 
 const [articles , setArticles] = useState([])
 const [page , setPage] = useState(1)
 const [loading , setLoading] = useState(true)
 const [totalResults , setTotalResults] = useState(0)

  
    
   
   const updateNews= async()=>
    {
      props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
      setLoading(true)

      let data = await fetch(url); 
      props.setProgress(30)

      let parsedData= await data.json()
      props.setProgress(70)

      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)

      props.setProgress(100)
    }

    useEffect(()=>{
      
      document.title=`${props.category} - NewsMonkey`

      updateNews()
      // eslint-disable-next-line
 
    },[])

    

    const fetchMoreData = async () => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      let data = await fetch(url);
      let parsedData = await data.json()

      setArticles( articles.concat(parsedData.articles))
      setTotalResults( parsedData.totalResults)
      
  };
    

    return (
      <div>
          
            <h1 className='mb-4 text-center'>NewsMonkey - Top {props.category} Headlines</h1>
            { loading && <Spinner/>}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container" style={{marginTop : '30px'}}>
            <div className="row gy-4 ">
                {articles.map((element)=>{
                return <div className="col-md-4 mx-auto" key={element.url}><Newsitem  title={element.title===null?"Click Read More for deat":element.title.slice(0,45)} description = {element.description===null?"Click Read More for Full News":element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div>
            })}
                </div>
                </div>
         
         </InfiniteScroll>
        </div>
      
       
      
    )
  
}
News.defaultProps = {
  country : "us",
  category :'general',
  pagesize :8

}

News.propTypes = {
  country : PropTypes.string,
  category : PropTypes.string,
  pagesize : PropTypes.number
}
export default News
