import React, { Fragment, useState } from 'react';

const FormularioGastos = () => {
	const [nombreGasto, setNombreGasto] = useState('');
	const [cantidadGasto, setCantidadGasto] = useState(0);

	const onChanged = (e) => {
		if (e.target.name === 'cantidad') {
			let cantidadIngresada = e.target.value;
			if (cantidadIngresada <= 0 || isNaN(cantidadIngresada)) {
        // TODO Error de cantidad
        return;
      }
      
			setCantidadGasto(parseInt(e.target.value));
		} else {
			setNombreGasto(e.target.value);
		}
	};

	return (
		<Fragment>
			<h3>Agrega tus gastos</h3>

			<form>
				<div className='mb-3'>
					<label className='form-label'>Nombre Gasto</label>
					<input
						type='text'
						className='form-control'
						onChange={onChanged}
						value={nombreGasto}
						name='nombre'
						placeholder='Ej. Transporte'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Cantidad Gasto</label>
					<input
						type='number'
						className='form-control'
						onChange={onChanged}
						value={cantidadGasto}
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
