import React, { useState, useEffect } from 'react';
import ColocarPresupuesto from './components/ColocarPresupuesto';
import FormularioGastos from './components/FormularioGastos';
import ListadoGastos from './components/ListadoGastos';
import ControlGastos from './components/ControlGastos';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [gastos, setGastos] = useState([]);
	const [mostrarIngresoPresupuesto, setMostrarIngresoPresupuesto] = useState(true);
	const [gasto, setGasto] = useState({});

	useEffect(() => {
		if (gasto.id !== undefined) setGastos([...gastos, gasto]);

		// TODO Descontar gasto del presupuesto
		// setRestante(restante - gasto.cantidad);
	}, [gasto]);

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
								<FormularioGastos setGasto={setGasto} />
							</div>
							<div className='col'>
								<ListadoGastos gastos={gastos} />
								<ControlGastos presupuesto={presupuesto} restante={restante} />
							</div>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
