import React from 'react'

const Alerta = ({texto, tipo}) => {
  return (
		<div className={`alert alert-${tipo} text-center`} role='alert'>
			{texto}
		</div>
	);
}

// TODO PropType

export default Alerta
