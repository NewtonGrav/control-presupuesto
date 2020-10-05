import React from 'react';
import Pregunta from './components/Pregunta';

function App() {
	return (
		<div className='container'>
			<header>
				<h1 className='display-3 mb-5 text-light'>Gasto Semanal</h1>

				<div className='contenido-principal contenido p-5'>
					<Pregunta />
				</div>
			</header>
		</div>
	);
}

export default App;
