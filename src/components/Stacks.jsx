import React, { useEffect, useState } from "react";
import Filter from "./Filter";

import { stackFilters, STACK_ICONS } from "../data/data";

function Stacks() {
	const [active, setActive] = useState("all");
	const [icons, setIcons] = useState([...STACK_ICONS]);

	let newActive = active.charAt(0).toUpperCase() + active.slice(1); // capatalize letter e.g. all = All

	const filterIcons = (val) => {
		setActive(val);

		if (val == "all") {
			setIcons([...STACK_ICONS]);
		} else {
			let newIcons = STACK_ICONS.filter((stack) => {
				return stack.type == val;
			});

			setIcons(newIcons);
		}
	};

	return (
		<section className="default">
			<h2 className="heading">Stacks</h2>

			<div className=" my-4 flex gap-2 flex-wrap">
				{stackFilters.map((filter) => (
					<Filter
						key={filter}
						data={filter}
						handler={filterIcons}
						active={newActive}
					/>
				))}
			</div>

			<div className="mt-8 flex items-center gap-5 flex-wrap">
				{icons?.map((stack, index) => (
					<div
						key={index}
						data-type={stack.type}
						className="w-[80px]"
					>
						<img
							className="rounded-md"
							src={stack.icon}
							alt={stack.icon}
						/>
					</div>
				))}
			</div>
		</section>
	);
}

export default Stacks;
