import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import First from './components/First';
import Details from './components/Details';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const [data,setData] = useState([]);
  useEffect(
    async () => {
      const result = await axios(
        'http://starlord.hackerearth.com/TopRamen',
      );
      setData(result.data);
  },[])
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path ="/"><First data={data}/></Route>
          <Route exact path ="/home"><First data={data}/></Route>
          <Route path="/:id" children={<Details data={data}/>}> 
            <Details data={data}/>
          </Route>
          <Details/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
