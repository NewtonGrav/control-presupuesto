import React, { Fragment } from 'react';

const Pregunta = () => {
	return (
		<Fragment>
			<h3 className="display-6 mb-5">Coloca tu presupuesto</h3>

			<form action=''>
				<div className='mb-4'>
					<input
						type='number'
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
