import './App.css';

import React  from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


const App = ()=> {
  
  const apiKey= process.env.REACT_APP_NEWS_API
  
  const [progress , setProgress] = useState(0)
  
  
  
    
    
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        {/* "i have set defaultProps they will be used whnever i will not pass props here in  <News setProgress={setProgress} apiKey={apiKey} />" */}
         
          {/* we used KEY in NEWS Component to force remount the component without it react thinks that component is already mounted and doesnt update it so to update content we must provide unqiue key */}
         
          <Route  exact path='/' element={ <News setProgress={setProgress} apiKey={apiKey} key={"general"} pagesize={5} country={'us'} category={"General"}/>}/>
          <Route  exact path='/Business' element={ <News setProgress={setProgress} apiKey={apiKey} key={"Business"} pagesize={5} country={'us'} category={"Business"}/>}/>
          <Route  exact path='/Entertainment' element={ <News setProgress={setProgress} apiKey={apiKey}  key={"Entertainment"} pagesize={5} country={'us'} category={"Entertainment"}/>}/>
          <Route  exact path='/General' element={ <News setProgress={setProgress} apiKey={apiKey} key={"General"} pagesize={5} country={'us'} category={"General"}/>}/>
          <Route  exact path='/Health' element={ <News setProgress={setProgress} apiKey={apiKey} key={"Health"}pagesize={5} country={'us'} category={"Health"}/>}/>
          <Route  exact path='/Science' element={ <News setProgress={setProgress} apiKey={apiKey} key={"Science"} pagesize={5} country={'us'} category={"Science"}/>}/>
          <Route  exact path='/Sports' element={ <News setProgress={setProgress} apiKey={apiKey} key={"Sports"} pagesize={5} country={'us'} category={"Sports"}/>}/>
          <Route  exact path='/Technology' element={ <News setProgress={setProgress} apiKey={apiKey} key={"Technology"} pagesize={5} country={'us'} category={"Technology"}/>}/>
        
        </Routes>
        
      </div>
      </BrowserRouter>
      
    )
    
  
}
export default App;
