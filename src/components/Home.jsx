import React from "react";
import HomeImg from "../assets/image2.jpg";
function Home() {
	return (
		<main>
			<img
				src={HomeImg}
				alt='HomeImage'
				className='absolute object-cover w-full h-full'
			/>
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
				<h1 className='text-8xl text-green-800 font-bold cursive leading-none lg:leading-snug home-name'>
					This is Vishal Here...
				</h1>
			</section>
		</main>
	);
}

export default Home;
