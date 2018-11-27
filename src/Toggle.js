import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleState: true
		};
		this.switchToggle = this.switchToggle.bind(this);
	}

	// switchToggle = () => this.setState({ toggleState: !this.state.toggleState });
	switchToggle() {
		console.log(this);
		this.setState({ toggleState: !this.state.toggleState });
	}

	render() {
		return (
			<div>
				<p>Toggle is {this.state.toggleState ? 'ON' : 'FALSE'}</p>
				<button onClick={this.switchToggle}>Toggle</button>
				{
					// Do not use following method to avoid performace issues
					// Reference: https://reactjs.org/docs/handling-events.html
				}
				<button onClick={evt => this.switchToggle(evt)}>Toggle 2</button>
			</div>
		);
	}
}

export default Toggle;
