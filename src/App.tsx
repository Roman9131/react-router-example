import React from 'react';
import ReactInfo from "./components/ReactInfo";
import VueInfo from "./components/VueInfo";
import AngularInfo from "./components/AngularInfo";
import './App.css';


function App() {
	// const state = {'page_id': 1, 'user_id': 5};
	// const title = 'Title';
	// const url = 'hello-world.html';
	return (
		<div className="App">
			<header className="App-header">
				<p className="header-title">
					Современные JavaScript библиотеки и фреймворки для создания пользовательских интерфейсов
				</p>
			</header>
			{/*<div>History state: {JSON.stringify(window.history.state)}</div>*/}
			{/*<div style={{wordBreak: "break-word"}}>Location: {JSON.stringify(window.location)}</div>*/}
			{/*<div>*/}
			{/*	<button onClick={() => window.history.pushState(state, title, url)}>Добавить историю</button>*/}
			{/*	<button onClick={() => window.history.back()}>Назад</button>*/}
			{/*</div>*/}
			<AngularInfo/>
			<ReactInfo/>
			<VueInfo/>
		</div>
	);
}

export default App;
