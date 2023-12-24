import React from 'react';
import Header from './header/header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';

const Layout = () => {
	return (
		<div className="relative overflow-x-hidden">
			<Header />
			<div className="">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
