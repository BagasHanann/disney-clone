import React from 'react';
import GenreList from '../list/GenreList';
import MovieList from './MovieList';
const GenreMovieList = () => {
	return (
		<div>
			{GenreList.genre.map(
				(item, index) =>
					index <= 4 && (
						<div className="p-4 px-8 md:px-16" key={item.id}>
							<h2 className="ml-3 text-white text-[20px] font-bold">
								{item.name}
							</h2>
							<MovieList genreId={item.id} index_={index} />
						</div>
					),
			)}
		</div>
	);
};

export default GenreMovieList;
