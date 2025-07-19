import { useEffect, useState, type ButtonHTMLAttributes } from "react";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export type SortOrder = "none" | "asc" | "desc";

interface SortToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	orderKey: string;
	externalOrderType: string;
	onSortChange: (orderKey: string, order: SortOrder) => void;
}

const SortToggle = ({
	title,
	orderKey,
	externalOrderType,
	onSortChange,
	...props
}: SortToggleProps) => {
	const [order, setOrder] = useState<SortOrder>("none");

	const toggle = () => {
		const next: SortOrder =
			order === "none" ? "asc" : order === "asc" ? "desc" : "none";
		setOrder(next);
		onSortChange(orderKey, next);
	};

	const icon =
		order === "asc" ? (
			<ArrowUp className="w-4 h-4" />
		) : order === "desc" ? (
			<ArrowDown className="w-4 h-4" />
		) : (
			<Minus className="w-4 h-4" />
		);

	useEffect(() => {
		if (externalOrderType !== orderKey) setOrder("none");
	}, [externalOrderType, orderKey]);

	return (
		<button
			onClick={toggle}
			className="flex items-center gap-1 disabled:hover:text-gray-700 hover:text-black"
			{...props}>
			{title} {icon}
		</button>
	);
};

export default SortToggle;
