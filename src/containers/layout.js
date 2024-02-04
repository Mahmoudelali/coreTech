import React from 'react';
import Header from './header/header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import SideLinks from './sideLinks/sideLinks';
import ScrollToTop from '../components/scrollToTop';

const Layout = () => {
	return (
		<div className="relative overflow-x-hidden">
			<ScrollToTop />
			<Header />
			<div className="">
				<Outlet />
			</div>
			<Footer />
			<SideLinks />
		</div>
	);
};

export default Layout;
