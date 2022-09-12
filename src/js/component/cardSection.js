import React from "react";
import { Cards } from "./cards";


export const CardSection = () => {
	return (
		<div className="container">
			<div className="row">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
};