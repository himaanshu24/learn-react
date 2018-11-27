import React from 'react';

class InputComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	onChangeHandler = evt => {
		this.setState({
			value: evt.target.value
		});
	};

	render() {
		return (
			<input
				type="text"
				// defaultValue=""
				value={this.state.value}
				name="customInput"
				onChange={this.onChangeHandler}
			/>
		);
	}
}

class SelectComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'C'
		};
	}

	onChangeHandler = evt => {
		this.setState({
			value: evt.target.value
		});
	};

	render() {
		return (
			<select
				value={this.state.value}
				onChange={this.onChangeHandler}
				name="customSelectBox"
			>
				<option value="A">AA</option>
				<option value="B">BB</option>
				<option value="C">CC</option>
				<option value="D">DD</option>
				<option value="E">EE</option>
			</select>
		);
	}
}

class TextareaComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'This is default value'
		};
	}

	onChangeHandler = evt => {
		this.setState({
			value: evt.target.value
		});
	};

	render() {
		return (
			<textarea
				name="customTextarea"
				id="ew"
				cols="30"
				rows="10"
				value={this.state.value}
				onChange={this.onChangeHandler}
			/>
		);
	}
}

class FormWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'aa',
			inputVal: '',
			selectVal: ''
		};
	}

	onChangeHandler = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	render() {
		return (
			<form action="">
				<input
					type="text"
					value={this.state.inputVal}
					name="inputVal"
					onChange={this.onChangeHandler}
				/>
				<br />
				<select
					value={this.state.selectVal}
					onChange={this.onChangeHandler}
					name="selectVal"
				>
					<option value="A">AA</option>
					<option value="B">BB</option>
					<option value="C">CC</option>
					<option value="D">DD</option>
					<option value="E">EE</option>
				</select>
			</form>
		);
	}
}

export default FormWrapper;
