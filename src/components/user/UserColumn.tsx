import type { TdHTMLAttributes } from "react";

const UserColumn = ({
	children,
	...props
}: TdHTMLAttributes<HTMLTableCellElement>) => {
	return (
		<td className="py-3 px-6" {...props}>
			{children}
		</td>
	);
};

export default UserColumn;
