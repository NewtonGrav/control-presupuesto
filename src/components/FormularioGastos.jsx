import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';
import Alerta from './Alerta';

const FormularioGastos = ({ setGasto }) => {
	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState(0);
	const [errorEnGasto, setErrorEnGasto] = useState(false);

	const obtenerGasto = (e) => {
		e.preventDefault();

		if (nombre === '' || cantidad < 1 || isNaN(cantidad)) {
			setErrorEnGasto(true);
			return;
		}

		setErrorEnGasto(false);

		let gasto = { nombre, cantidad, id: Shortid() };
		setGasto(gasto);

		setCantidad(0);
		setNombre('');
	};

	const onChangeCantidad = (e) => {
		let value = parseInt(e.target.value);
		if (!isNaN(value)) setCantidad(value);
	};

	return (
		<Fragment>
			<h3 className='mb-5'>Agrega tus gastos</h3>

			{errorEnGasto ? (
				<div className='my-4'>
					<Alerta
						texto='El gasto ingresado no parece correcto. Verifique los campos'
						tipo='danger'
					/>
				</div>
			) : null}

			<form onSubmit={obtenerGasto}>
				<div className='mb-3'>
					<label className='form-label'>Nombre</label>
					<input
						type='text'
						className='form-control'
						onChange={(e) => setNombre(e.target.value)}
						value={nombre}
						name='nombre'
						placeholder='Ej. Transporte'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Monto</label>
					<input
						type='number'
						className='form-control'
						onChange={(e) => onChangeCantidad(e)}
						value={cantidad}
						name='cantidad'
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-lg btn-block'>
					Agregar Gasto
				</button>
			</form>
		</Fragment>
	);
};

FormularioGastos.propTypes = {
	setGasto: PropTypes.func.isRequired,
};

export default FormularioGastos;
