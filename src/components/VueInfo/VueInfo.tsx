import React from "react";

const VueInfo = () => {
	return (
		<div className="container">
			<p className="title">
				Vue
			</p>
			<p className="description">
				<b>Vue</b>(произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских
				интерфейсов. В отличие от фреймворков-монолитов, Vue создан пригодным для постепенного внедрения. Его ядро в
				первую очередь решает задачи уровня представления (view), что упрощает интеграцию с другими библиотеками и
				существующими проектами. С другой стороны, Vue полностью подходит и для создания сложных одностраничных
				приложений (SPA, Single-Page Applications), если использовать его совместно с современными инструментами и
				дополнительными библиотеками.
			</p>
			<a className="link" rel="noreferrer" href="https://ru.vuejs.org/" target="_blank">Документация Vue</a>
		</div>
	);
}

export default VueInfo;