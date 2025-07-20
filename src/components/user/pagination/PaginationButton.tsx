import cn from "clsx";
import type { ButtonHTMLAttributes } from "react";

const PaginationButton = ({
	disabled,
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			disabled={disabled}
			className={cn(
				"hover:opacity-80 disabled:hover:opacity-100",
				disabled ? "opacity-100" : "opacity-60",
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default PaginationButton;
