import React, { Fragment, useState, useEffect } from 'react';
import Alerta from './Alerta';

const ControlGastos = ({ presupuesto, restante }) => {
	const [porcentajeRestanteUtilizado, setPorcentajeRestanteUtilizado] = useState(0);
	const [tipoAlerta, setTipoAlerta] = useState('primary');

	useEffect(() => {
		const porcentaje = ((presupuesto - restante) / restante) * 100;
		setPorcentajeRestanteUtilizado(porcentaje);

		if (porcentajeRestanteUtilizado >= 70) {
			setTipoAlerta('danger');
		} else if (porcentajeRestanteUtilizado >= 40) {
			setTipoAlerta('warning');
		} else {
			setTipoAlerta('primary');
		}
	}, [restante]);

	return (
		<Fragment>
			<Alerta texto={`Presupuesto: $ ${presupuesto}`} tipo='primary' />

			<Alerta texto={`Restante: $ ${restante}`} tipo={tipoAlerta} />
		</Fragment>
	);
};

export default ControlGastos;
