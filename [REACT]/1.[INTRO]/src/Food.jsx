function Food() {
	
	const food1 = "Pizza";
	const food2 = "Hamburger";
	
	return (
		<ul>
			<li>{food1}</li>
			<li>{food2.toUpperCase}</li>
		</ul>
	);
}

export default Food;