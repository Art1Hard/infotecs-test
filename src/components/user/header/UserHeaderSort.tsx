import type { SortDirection } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface UserHeaderSortProps {
	isSorted: false | SortDirection;
	canSort: boolean;
}

const UserHeaderSort = ({ isSorted, canSort }: UserHeaderSortProps) => {
	return (
		<>
			{{
				asc: <ArrowUp className="w-4 h-4" />,
				desc: <ArrowDown className="w-4 h-4" />,
			}[isSorted as string] ??
				(canSort && <Minus className="w-4 h-4" />)}
		</>
	);
};

export default UserHeaderSort;
