import React, { Fragment } from 'react';
import Alerta from './Alerta';
import { revisarPresupuesto } from './helpers';

const ControlGastos = ({ presupuesto, restante }) => {
	return (
		<Fragment>
			<Alerta
				texto={`Restante: $ ${restante}`}
				tipo={revisarPresupuesto(presupuesto, restante)}
			/>
      
			<Alerta texto={`Presupuesto: $ ${presupuesto}`} tipo='primary' />
		</Fragment>
	);
};

export default ControlGastos;
