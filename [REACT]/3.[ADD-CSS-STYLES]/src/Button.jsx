function Button() {

	const styles = {
		backgroundColor: 'blue',
		color: 'white',
		border: 'none',
		padding: '10px 20px',
		borderRadius: '5px',
		cursor: 'pointer',
	}

	return (<button style={styles}>Click me</button>);
}

export default Button