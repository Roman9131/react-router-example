import React from "react";
import {useParams, useLocation, useRouteMatch } from "react-router-dom";

const ReactInfo = () => {
	// const { id } = useParams<{id: string}>();
	// const location = useLocation()
	// const match = useRouteMatch('/react/:id');
	// console.log(params);
	return (
		<div className="container">
			<p className="title">
				React
			</p>
			<p className="description">
				<b>React — это JavaScript-библиотека для создания пользовательских интерфейсов. </b> Обратите внимание, что это
				именно
				библиотека, а не фреймворк. React часто называют фреймворком, но это ошибка. Во-первых, его использование ни к
				чему вас не обязывает, не формирует «фрейм» проекта. Во-вторых, React выполняет единственную задачу: показывает
				на странице компонент интерфейса, синхронизируя его с данными приложения, и только этой библиотеки в общем
				случае недостаточно для того, чтобы полностью реализовать проект.
			</p>
			<a className="link" rel="noreferrer" href="https://ru.reactjs.org/" target="_blank">Документация React</a>
			{/*{match && (<div>Id: {id}</div>)}*/}
		</div>
	);
}

export default ReactInfo;