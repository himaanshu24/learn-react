import React from 'react';

const UserLogin = props => {
	return <span>{props.user}.</span>;
};

const GuestLogin = () => {
	return <span>Guest User.</span>;
};

class Condition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: true
		};
	}

	render() {
		return (
			<div>
				<span>This is </span>
				{this.state.isLoggedIn ? (
					<UserLogin user="Himanshu Kumar" />
				) : (
					<GuestLogin />
				)}
			</div>
		);
	}
}

export default Condition;
