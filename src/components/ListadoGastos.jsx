import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => (
	<div className='gastos-realizados mb-4'>
		<h3 className='mb-4'>Listado</h3>

		{gastos.map((gasto) => (
			<Gasto gasto={gasto} key={gasto.id} />
		))}
	</div>
);

ListadoGastos.propTypes = {
	gastos: PropTypes.array.isRequired,
};

export default ListadoGastos;
