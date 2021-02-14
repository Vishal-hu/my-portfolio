import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import ImageAbout from "../assets/image1.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'author']{
			name,
			bio,
			'authorImage':image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch((error) => console.log(error));
	}, []);
	if (!author) return <div>Loading...</div>;
	return (
		<div>
			<div className='bg-green-300 cursive text-center justify-center p-10'>
				<a href='mailto:rajputvishal21598@gmail.com'>TOUCH ME</a>
			</div>
			<main className='relative'>
				<img
					src={ImageAbout}
					alt='About page image'
					className='absolute w-full'
				/>
				<div className='p-10 lg:pt-48 container mx-auto relative'>
					<section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
						<img
							src={urlFor(author.authorImage).url()}
							className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
							alt={author.name}
						/>
						<div className='text-lg flex flex-col justify-center'>
							<h1 className='cursive text-6xl text-green-300 mb-4'>
								Hey there. I'm{""}
								<span className='text-green-100'>{author.name}</span>
							</h1>
							<div className='prose lg:prose-xl text-white'>
								<BlockContent
									blocks={author.bio}
									projectId='6kr0s4k2'
									dataset='production'
								/>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

export default About;
