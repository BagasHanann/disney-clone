import React, { useEffect, useRef, useState } from 'react';
import GlobalAPI from '../services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;
const Slider = () => {
	const [movieList, setMovieList] = useState([]);
	const elementRef = useRef();
	useEffect(() => {
		getTrendingMovies();
	}, []);

	const getTrendingMovies = () => {
		GlobalAPI.getTrendingVideos.then((res) => {
			console.log(res.data.results);
			setMovieList(res.data.results);
		});
	};

	const sliderRight = (element) => {
		element.scrollLeft += screenWidth - 110;
	};

	const sliderLeft = (element) => {
		element.scrollLeft -= screenWidth - 110;
	};

	return (
		<>
			<div>
				<HiChevronLeft
					className="text-white text-[35px] absolute mx-8 mt-[150px] cursor-pointer"
					onClick={() => sliderLeft(elementRef.current)}
				/>
				<HiChevronRight
					className="text-white text-[35px] absolute mx-8 mt-[150px] cursor-pointer right-0"
					onClick={() => sliderRight(elementRef.current)}
				/>

				<div
					className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
					ref={elementRef}>
					{movieList.map((item) => (
						<img
							src={`${IMAGE_URL}${item.backdrop_path}`}
							alt=""
							className="min-w-full h-[320px] object-cover object-left-top mr-6 rounded-lg hover:border-[2px] border-gray-600 transition-all duration-100 ease-in-out"
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Slider;
