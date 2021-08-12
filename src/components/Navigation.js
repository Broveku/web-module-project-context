import React, {useContext} from 'react';
import ProductContext from '../context/productContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const {cart} = useContext(ProductContext)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
