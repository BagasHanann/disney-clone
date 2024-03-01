import React from 'react';

// Images assets
import disney from '../assets/Images/disney.png';
import pixar from '../assets/Images/pixar.png';
import marvel from '../assets/Images/marvel.png';
import starwars from '../assets/Images/starwar.png';
import natgeo from '../assets/Images/nationalG.png';

// Videos assets
import disneyVideo from '../assets/Videos/disney.mp4';
import pixarVideo from '../assets/Videos/pixar.mp4';
import marvelVideo from '../assets/Videos/marvel.mp4';
import starwarsVideo from '../assets/Videos/star-wars.mp4';
import natgeoVideo from '../assets/Videos/national-geographic.mp4';

const ProductionHouse = () => {
	const list = [
		{
			id: 1,
			image: disney,
			video: disneyVideo,
		},
		{
			id: 2,
			image: pixar,
			video: pixarVideo,
		},
		{
			id: 3,
			image: marvel,
			video: marvelVideo,
		},
		{
			id: 4,
			image: starwars,
			video: starwarsVideo,
		},
		{
			id: 5,
			image: natgeo,
			video: natgeoVideo,
		},
	];

	return (
		<div className="flex gap-2 md:gap-6 p-2 px-8 md:px-16 mt-6">
			{list.map((item) => (
				<div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800">
					<video
						key={item.id}
						src={item.video}
						autoPlay
						loop
						playsInline
						className="absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-50"
					/>
					<img src={item.image} alt="" className="w-full z-[1]" />
				</div>
			))}
		</div>
	);
};

export default ProductionHouse;
