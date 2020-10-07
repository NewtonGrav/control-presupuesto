import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

ControlGastos.propTypes = {
	presupuesto: PropTypes.number.isRequired,
	restante: PropTypes.number.isRequired,
};

export default ControlGastos;
