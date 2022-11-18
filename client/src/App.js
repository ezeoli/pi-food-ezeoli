import './App.css';
import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom' 
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import RecipeDetail from './components/cardDetails/CardDetails'
import NavBar from './components/navBar/NavBar';

// 
function App() {
  return (
    <BrowserRouter>

    <div className="App">
      
      
   <Route path="/home"> <NavBar />  </Route>

      <Switch>
        
        <Route exact path = '/' component = {Landing}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path="/recipes/:id" render={( {match}) => <RecipeDetail match={match} />}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
