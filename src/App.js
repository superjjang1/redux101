import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Main from './components/Main';
import Dairy from './components/Dairy';
import MeatDept from './components/MeatDept';
import FrozenDept from './components/FrozenDept';


function App(){
	return(
		<Router>
			<Route path ="/" component={NavBar} />
			<Route exact path="/" component={Main}/>
			<Route exact path="/Dairy" component={Dairy}/>
			<Route exact path="/MeatDept" component={MeatDept}/>
			<Route exact path="/FrozenDept" component={FrozenDept}/>
			
		</Router>

	)
}


export default App;
