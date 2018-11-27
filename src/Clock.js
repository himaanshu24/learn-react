import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			count: 0
		};
	}

	tick = () => {
		this.timerId = setInterval(() => {
			this.setState({ date: new Date() });
			// this.setState({
			// 	count: this.state.count + 1
			// });
			this.setState((state, props) => ({ count: state.count + 1 }));
		}, 100);
	};

	componentDidMount() {
		this.tick();
		// console.log(this.props);
		// this.setState((state, props) => ({ count: state.count + 1 }));
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<div>
				{
					//<p>What is the props:: {[...this.props]}</p>
				}
				<p>This is counter:: {this.state.count}</p>
				<p>The time is {this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}
}
export default Clock;
