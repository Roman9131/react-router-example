import React from 'react';
import ReactInfo from "./components/ReactInfo";
import VueInfo from "./components/VueInfo";
import AngularInfo from "./components/AngularInfo";
import './App.css';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p className="header-title">
					Современные JavaScript библиотеки и фреймворки для создания пользовательских интерфейсов
				</p>
			</header>
			<ReactInfo/>
			<VueInfo/>
			<AngularInfo/>
		</div>
	);
}

export default App;
