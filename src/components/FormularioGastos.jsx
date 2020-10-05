import React, { Fragment } from 'react';

const FormularioGastos = () => {
	return (
		<Fragment>
			<h3>Agrega tus gastos</h3>

			<form>
				<div className='mb-3'>
					<label class='form-label'>Nombre Gasto</label>
					<input
						type='text'
						className='form-control'
						name='nombre'
						placeholder='Ej. Transporte'
					/>
				</div>

				<div className='mb-3'>
					<label class='form-label'>Cantidad Gasto</label>
					<input
						type='number'
						className='form-control'
						name='cantidad'
						placeholder='Ej. 300'
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-lg btn-block'>
					Agregar Gasto
				</button>
			</form>
		</Fragment>
	);
};

export default FormularioGastos;
