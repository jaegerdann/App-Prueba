class App extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			empleados: [
			{id: 1, nombre: "Pepe", email: "pepe@correo.com"},
			{id: 2, nombre: "Paco", email: "paco@email.es"}
			]
		};
	}
	render()
	{
		return (
			<ListaEmpleados empleados={this.state.empleados} />
			);
	}
}

class Empleado extends React.Component {
render () {
return (<li>{this.props.nombre - this.props.email}</li>);
}
}

class ListaEmpleados extends React.Component {
	render () {
		return (
			<div>
				<ul>
					...
				</ul>
				<form onSubmit={this.props.onAddEmployee}>
					<input type="text" placeholder="Nombre" name="nombre"
					<input type="email" placeholder="Email" name="email" />
					<input type="submit" value="Guardar" />
				</form>
			</div>
		);
	}
}