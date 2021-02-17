import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import React from "react";

function Navbar() {
	return (
		<header className='bg-pink-500 md:flex '>
			<div className='container mx-auto flex justify-center inflex'>
				<nav className='flex '>
					<NavLink
						exact
						to='/'
						activeClassName='text-red'
						className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-700 text-8xl font-bold cursive tracking-widest'>
						Vishal
					</NavLink>
					<NavLink
						to='/post'
						activeClassName='text-red-100 bg-pink-600'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 '>
						Blog Posts
					</NavLink>
					<NavLink
						to='/project'
						activeClassName='text-red-100 bg-pink-600'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 '>
						Projects
					</NavLink>
					<NavLink
						to='/about'
						activeClassName='text-red-100 bg-pink-600'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 '>
						AboutMe!
					</NavLink>
				</nav>
				<div className='inline-flex py-3 px-3 my-10 ml-auto'>
					<SocialIcon
						url='https://github.com/Vishal-hu'
						className='mr-4'
						target='_blank'
						fgColor='#60e0fe'
						style={{ width: 65, height: 65 }}
					/>
					<SocialIcon
						url='https://www.instagram.com/rajputvishal08/'
						className='mr-4'
						target='_blank'
						fgColor='pink'
						style={{ width: 65, height: 65 }}
					/>
					<SocialIcon
						url='https://twitter.com/VISHALR09061541'
						className='mr-4'
						target='_blank'
						fgColor='60e0fe'
						style={{ width: 65, height: 65 }}
					/>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
