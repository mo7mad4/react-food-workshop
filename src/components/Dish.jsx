import React, { useState } from "react";


const Dish = ({ name, desc, price }) => {
	return (
		<>
			<h3>{name}</h3>
			<p>{desc}</p>
			<p>${price.toFixed(2)}</p>
		</>
	);
}
export default Dish;