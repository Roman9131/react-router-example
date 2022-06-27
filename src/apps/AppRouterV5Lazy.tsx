import React, {FC, lazy, Suspense} from 'react';
import {Switch, Route, Link} from "react-router-dom"
import ReactInfo from "../components/ReactInfo";
import VueInfo from "../components/VueInfo";
import AngularInfo from "../components/AngularInfo";
import '../App.css';


function wait(module: Promise<{ default: FC }>, time: number) {
	return new Promise(resolve => setTimeout(resolve, time)).then(() => module);
}

const SomeModule = lazy(() => wait(import("../modules/someModule"), 3000));

const OtherComponent = lazy(() =>
	import("../modules/someModule").then((module) => ({
		default: module.OtherComponent,
	}))
);

function AppRouterV5Lazy() {
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
					{/*<Link to='/other'>Lazy1</Link>*/}
					{/*<Link to='/module'>Lazy2</Link>*/}
				</div>
			</header>
			<Switch>
				<Route exact path="/">
					<div>Главная страница</div>
				</Route>
				<Route exact path={["/react", "/react/:id"]} component={ReactInfo}/>
				<Route path="/vue" render={() => <VueInfo/>}/>
				<Route path="/angular">
					<AngularInfo/>
				</Route>
				<Route path="/other">
					<Suspense fallback={<div>Загрузка...</div>}>
						<OtherComponent/>
					</Suspense>
				</Route>
				<Route path="/module">
					<Suspense fallback={<div>Загрузка...</div>}>
						<SomeModule/>
					</Suspense>
				</Route>
			</Switch>
		</div>
	);
}

export default AppRouterV5Lazy;
