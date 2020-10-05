import React, { Fragment } from 'react';

const Pregunta = () => {
	const [presupuesto, setPresupuesto] = useState(0);

	const presupuestoDefinido = (e) => {
		setPresupuesto(parseInt(e.target.value));
	};

	const agregarPresupuesto = (e) => {
		e.preventDefault();
    
		// Validar
		if (presupuesto < 1 || isNaN(presupuesto)) {
      setErrorPresupuesto(true);
      return
		}

		setErrorPresupuesto(false);

		// Accion
	};

	return (
		<Fragment>
			<h3 className="display-6 mb-5">Coloca tu presupuesto</h3>

			<form onSubmit={agregarPresupuesto}>
				<div className='mb-4'>
					<input
						type='number'
						onChange={presupuestoDefinido}
						className='form-control form-control-lg'
						placeholder='Presupuesto'
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-lg btn-block'>
					Definir Presupuesto
				</button>
			</form>
		</Fragment>
	);
};

export default Pregunta;
