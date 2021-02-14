import React, { useState, useEffect } from "react";
import sanityClient from "../client";
// import project from "../../blogs/schemas/project";

function Project() {
	const [projectData, setProjectData] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'project']{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
			)
			.then((data) => setProjectData(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<main className='bg-green-100 min-h-screen p-12'>
			<section className='container mx-auto'>
				<h1 className='text-4xl flex justify-center cursive'>My Projects</h1>
				<h2 className='text-2xl text-gray-600 flex justified-center mb-12 cursive font-bold'>
					Welcome To My Projects Page!😎
				</h2>
				<section className='grid grid-cols-2 gap-8'>
					{projectData &&
						projectData.map((project, index) => (
							<article className='absolute rounded-lg shadow-xl bg-white p-14'>
								<h3 className='text-gray-800 text-3xl font-bold mb-3 hover:text-red-800'>
									<a
										href={project.link}
										alt={project.title}
										target='_blank'
										rel='noopener noreferrer'>
										{project.title}
									</a>
								</h3>
								<div className='text-gray-500 text-xs space-x-2 '>
									<span>
										<strong className='font-bold'>Finished on</strong>:{""}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className='font-bold'>Company</strong>:{""}
										{project.place}
									</span>
									<span>
										<strong className='font-bold'>Type</strong>:{""}
										{project.projectType}
									</span>
									<p className='my-6 text-lg text-gray-700 leading-relaxed'>
										{project.description}
									</p>
									<a
										href={project.link}
										rel='noopener noreferrer'
										target='_blank'
										className='text-red-500 font-bold hover:underline hover:text-green-400 text-xl'>
										View The Project{""}
										<span role='img' aria-label='right pointer'>
											👉
										</span>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}

export default Project;