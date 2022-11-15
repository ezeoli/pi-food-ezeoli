import './App.css';
import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom' 
import Landing from './components/landing/landing'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
     
      </Switch>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
