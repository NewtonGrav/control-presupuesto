import React, { useState } from 'react';
import ColocarPresupuesto from './components/ColocarPresupuesto';
import FormularioGastos from './components/FormularioGastos';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [gastos, setGastos] = useState([]);
	const [mostrarIngresoPresupuesto, setMostrarIngresoPresupuesto] = useState(true);

	const agregarGasto = (gasto) => {
		setGastos([...gastos, gasto]);
	}

	return (
		<div className='container'>
			<main>
				<h1 className='display-3 my-5 text-light'>Gasto Semanal</h1>

				<section className='contenido-principal contenido p-5'>
					{mostrarIngresoPresupuesto ? (
						<ColocarPresupuesto
							setPresupuesto={setPresupuesto}
							setRestante={setRestante}
							setMostrarIngresoPresupuesto={setMostrarIngresoPresupuesto}
						/>
					) : (
						<div className='row'>
							<div className='col'>
								<FormularioGastos agregarGasto={agregarGasto} />
							</div>
							<div className='col'>Lista de Gastos</div>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
