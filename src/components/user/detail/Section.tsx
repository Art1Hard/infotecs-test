import type { ReactNode } from "react";

interface DetailSectionProps {
	title: string;
	children: ReactNode;
}

const DetailSection = ({ title, children }: DetailSectionProps) => {
	return (
		<>
			<h3 className="font-medium">{title}</h3>
			<div className="text-center mb-2">{children}</div>
		</>
	);
};

export default DetailSection;
