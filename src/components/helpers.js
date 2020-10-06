export const revisarPresupuesto = (presupuesto, restante) => {
	const porcentajeRestanteGastado = ((presupuesto - restante) / restante) * 100;

	if (porcentajeRestanteGastado >= 70) return 'danger';
	else if (porcentajeRestanteGastado >= 40) return 'warning';
	else return 'success';
};
