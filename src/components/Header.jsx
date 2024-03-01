import React, { useState } from 'react';
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const menu = [
		{
			title: 'Home',
			icon: <HiHome />,
		},
		{
			title: 'Search',
			icon: <HiMagnifyingGlass />,
		},
		{
			title: 'Watchlist',
			icon: <HiPlus />,
		},
		{
			title: 'Originals',
			icon: <HiStar />,
		},
		{
			title: 'Movies',
			icon: <HiPlayCircle />,
		},
		{
			title: 'Series',
			icon: <HiTv />,
		},
	];

	return (
		<div className="flex items-center justify-between px-14 py-8">
			<h2 className="text-2xl font-bold md:w-[115px]">Nomatt</h2>
			<div className="hidden md:flex gap-8 items-center">
				{menu.map((item) => (
					<HeaderItem key={item.title} name={item.title} icon={item.icon} />
				))}
			</div>
			<div className="flex md:hidden gap-8 items-center">
				{menu.map(
					(item, index) =>
						index < 3 && (
							<HeaderItem key={item.title} name={''} icon={item.icon} />
						),
				)}
				<div className="md:hidden" onClick={() => setToggle(!toggle)}>
					<HeaderItem name={''} icon={<HiDotsVertical />} />
					{toggle ? (
						<div className="absolute mt-5 bg-[#434242] shadow-lg p-3 px-5 py-4 rounded-md">
							{menu.map(
								(item, index) =>
									index > 2 && (
										<HeaderItem
											key={item.title}
											name={item.title}
											icon={item.icon}
										/>
									),
							)}
						</div>
					) : null}
				</div>
			</div>
			<h3 className="text-2xl md:w-[115px]">Bagas</h3>
		</div>
	);
};

export default Header;
