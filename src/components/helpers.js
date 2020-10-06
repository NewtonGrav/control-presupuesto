export const revisarPresupuesto = (presupuesto, restante) => {
	const porcentaje = ((presupuesto - restante) / restante) * 100;

	if (porcentaje >= 70) {
		return 'danger';
	} else if (porcentaje >= 40) {
		return 'warning';
	} else {
		return 'success';
	}
};
