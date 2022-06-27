import React from 'react';
import ReactInfo from "../components/ReactInfo";
import VueInfo from "../components/VueInfo";
import AngularInfo from "../components/AngularInfo";
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import '../App.css';

function AppRouterV5() {
	return (
		<div className="App">
			<header className="App-header">
				<p className="header-title">
					Современные JavaScript библиотеки и фреймворки для создания пользовательских интерфейсов
				</p>
				<div className="navigation">
					<Link to='/'>Главная страница</Link>
					<Link to='/react'>React</Link>
					<Link to='/vue'>Vue</Link>
					<Link to='/angular'>Angular</Link>
				</div>
			</header>
			<div>
				<Switch>
					<Route exact path="/">
						<div>Главная страница</div>
					</Route>
					<Route path={["/react", "/react/:id"]} component={ReactInfo}/>
					<Route path="/vue" render={() => <VueInfo/>}/>
					<Route path="/angular">
						<AngularInfo/>
					</Route>
					<Route path="*" render={() => <div>Не найдено 404</div>}/>
				</Switch>
			</div>
		</div>
	);
}

export default AppRouterV5;
