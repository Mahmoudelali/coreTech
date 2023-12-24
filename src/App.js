import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './containers/layout';

import Home from './containers/home/home';
import Product from './containers/product/product';
import Products from './containers/products/products.js';
import Contact from './containers/contact/contact.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/products" element={<Products />} />
					<Route path="/contact-us" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);	
}

export default App;
