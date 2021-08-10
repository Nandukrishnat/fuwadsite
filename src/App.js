import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData]=useState(null);

  useEffect(()=>{
    fetch('./database/db.json')
    .then(res =>{
      return res.json();
    })
    .then(data => setData(data));
  },[])

  return (
    <div className="">
     {data &&  <BrowserRouter>
        <div className="bg-blue-50">
          <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/work">
              <Work data={data.works}/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About data={data.about}/>
            </Route>
          </Switch>
        </div>
        <Navbar/>
      </BrowserRouter>}
    </div>
  );
}

export default App;
