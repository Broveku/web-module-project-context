import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './context/productContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
		// add the given item to the cart
	};

	return (
	<ProductContext.Provider value={{products, addItem, cart}}>
		<div className="App">
			<Navigation  />

			{/* Routes */}
			
			<Route exact path="/">
				<Products  />
			</Route>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>
		</div>
	</ProductContext.Provider>
	);
}

export default App;
