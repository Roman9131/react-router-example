import React, {useEffect} from 'react';
import {createBrowserHistory} from "history";
import ReactInfo from "../components/ReactInfo";
import VueInfo from "../components/VueInfo";
import AngularInfo from "../components/AngularInfo";
import '../App.css';

const history = createBrowserHistory();

function AppHistory() {
	let [state, setState] = React.useState({
		action: history.action,
		location: history.location,
	});
	
	useEffect(() => {
		const unlisten = history.listen(setState);
		return () => unlisten()
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p className="header-title">
					Современные JavaScript библиотеки и фреймворки для создания пользовательских интерфейсов
				</p>
			</header>
			<div>{JSON.stringify(state.location)}</div>
			<div>
				<button onClick={() => history.push('/about', {some: "Some info"})}>Кнопка Push</button>
				<button onClick={() => history.back()}>Кнопка Назад</button>
				<button onClick={() => history.forward()}>Кнопка Вперед</button>
			</div>
			<ReactInfo/>
			<VueInfo/>
			<AngularInfo/>
		</div>
	);
}

export default AppHistory;
