import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => (
	<div className='gastos-realizados'>
		<h3 className='mb-5'>Listado</h3>

		{gastos.map((gasto) => (
			<Gasto gasto={gasto} key={gasto.id} />
		))}
	</div>
);

export default ListadoGastos;
