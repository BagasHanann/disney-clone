import React from 'react';

const HeaderItem = ({ name, icon }) => {
	return (
		<div className="flex items-center cursor-pointer text-[20px] gap-3 text-white font-semibold hover:text-[#5cbbff] mb-2">
			{icon}
			<h2 className="">{name}</h2>
		</div>
	);
};

export default HeaderItem;
