import React, { useState } from "react";
import CategoreForm from "./components/CategoreForm";
import Dish from "./components/Dish";
import Price from "./components/Price";
import dishes from "./data";



function App() {
	const [min, setMin] = useState(4);
	const [max, setMax] = useState(4);
	const [selectedCategory, setSelectedCategory] = useState('');

	const filteredDishes = dishes.filter((item) => {
		if(selectedCategory==='all'){
			return item.price >= min && item.price <= max; 
		}
		if (item.price >= min && item.price <= max && item.category == selectedCategory) {
		  return item;
		}
	  });

	console.log("min", min)
	console.log("max", max)
	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>

				<form>
					<Price
						setMax={setMax}
						setMin={setMin}
					/>
					<CategoreForm setCategory={setSelectedCategory} />
				</form>
			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">

					{filteredDishes.map((ele, index) => {
						return (
							<li className="card" key={index}>
								<Dish
									name={ele.name}
									desc={ele.description}
									price={ele.price}
								/>
							</li>
						);
					})}


				</ul>
			</section>
		</main>
	);
}

export default App;
