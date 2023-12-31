import React from "react";

function Highlight({ children }) {
	return (
		<span className="text-[32px] text-black dark:text-white font-medium underline">
			{children}
		</span>
	);
}

export default Highlight;
