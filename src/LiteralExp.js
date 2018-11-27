const formatName = name =>
	`This is literal exp ${name.firstname} ${name.secondname}`;

const manipulateName = (strArr, ...rest) => {
	// let newSurname = a2;
	// if (newSurname === 'Kumar') {
	// 	newSurname = 'Whats up';
	// }
	// return `${strArr[0]} ${a1} ${newSurname} ${strArr[1]}`;
	return `
  All Strings:: ${strArr.filter(item => item.trim().length > 0)}
  All variables:: ${rest.map(item => typeof item)}
  `;
};

const name = {
	firstname: 'Himanshu',
	secondname: 'Kumar'
};

export const element = <div> Hello, {formatName(name)} </div>;
export const element2 = (
	<div>{manipulateName`Hello ${name.firstname} ${
		name.secondname
	} This is Oh! fff ${name} some`}</div>
);

const FunctionalComponent = props => <div>{`This is ${props.msg} PROP`}</div>;

export default FunctionalComponent;
