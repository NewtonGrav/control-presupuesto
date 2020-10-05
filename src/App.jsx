import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import FormularioGastos from './components/FormularioGastos';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);

	return (
		<div className='container'>
			<main>
				<h1 className='display-3 mb-5 text-light'>Gasto Semanal</h1>

				<section className='contenido-principal contenido p-5'>
					{presupuesto <= 0 ? (
						<Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
					) : (
						<div className='row'>
							<div className='col'>
								<FormularioGastos />
							</div>
							<div className='col'>
								Lista de Gastos
							</div>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
