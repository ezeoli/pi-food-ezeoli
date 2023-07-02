import './App.css';
import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom' 
import Landing from './components/landing/Landing'
import Home from './components/home/home'
import RecipeDetail from './components/cardDetails/cardDetails'
import NavBar from './components/navBar/NavBar';
import CreateRecipe from './components/creacteRecipe/CreateRecipe';
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
        <Route exact path ='/recipes' component={CreateRecipe}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
