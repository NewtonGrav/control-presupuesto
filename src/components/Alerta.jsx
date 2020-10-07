import React from 'react';
import PropTypes from 'prop-types'

const Alerta = ({ texto, tipo }) => {
	return (
		<div className={`alert alert-${tipo} fade show text-center`} role='alert'>
			{texto}
		</div>
	);
};

Alerta.propTypes = {
	texto: PropTypes.string.isRequired,
	tipo: PropTypes.string.isRequired
}

export default Alerta;
