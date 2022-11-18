import './App.css';
import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom' 
import Landing from './components/landing/landing'
import Home from './components/home/home'
import RecipeDetail from './components/cardDetails/cardDetails'
import NavBar from './components/navBar/navBar';

// 
function App() {
  return (
    <BrowserRouter>

    <div className="App">
      
      
   <Route path="/recipes"> <NavBar />  </Route>

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
