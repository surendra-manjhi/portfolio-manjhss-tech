import React from "react";

function Filter({ data }) {
	return (
		<div className="flex gap-3 py-4">
			{data?.map((item, index) => (
				<div
					key={index}
					className="px-4 py-1 bg-white rounded-[50px] border-2 border-black text-black text-center text-2xl font-normal "
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default Filter;
