import React from 'react';
import ReactInfo from "../components/ReactInfo";
import VueInfo from "../components/VueInfo";
import AngularInfo from "../components/AngularInfo";
// import {
// 	Link
// } from "react-router-dom";
import './App.css';

function AppRouterV6() {
	return (
		<div className="App">
			<header className="App-header">
				<p className="header-title">
					Современные JavaScript библиотеки и фреймворки для создания пользовательских интерфейсов
				</p>
				<div className="navigation">
					{/*<Link to='/'>Главная страница</Link>*/}
					{/*<Link to='/react'>React</Link>*/}
					{/*<Link to='/vue'>Vue</Link>*/}
					{/*<Link to='/angular'>Angular</Link>*/}
				</div>
			</header>
			<div>
				Контент приложения
				{/*<Routes>*/}
				{/*	<Route path="/" element={"Главная страница"}/>*/}
				{/*	<Route path="react" element={<ReactInfo/>}/>*/}
				{/*	<Route path="vue" element={<VueInfo/>}/>*/}
				{/*	<Route path="angular" element={<AngularInfo/>}/>*/}
				{/*</Routes>*/}
			</div>
			<ReactInfo/>
			<VueInfo/>
			<AngularInfo/>
		</div>
	);
}

export default AppRouterV6;
