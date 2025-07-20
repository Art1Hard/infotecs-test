import type { Updater } from "@tanstack/react-table";
import type { InputHTMLAttributes } from "react";

interface UserHeaderFilterProps extends InputHTMLAttributes<HTMLInputElement> {
	canFilter: boolean;
	getFilterValue: () => unknown;
	setFilterValue: (updater: Updater<string>) => void;
}

const UserHeaderFilter = ({
	canFilter,
	getFilterValue,
	setFilterValue,
	...props
}: UserHeaderFilterProps) => {
	return canFilter ? (
		<input
			className="text-sm border px-2 py-1 w-full"
			value={(getFilterValue() ?? "") as string}
			onChange={(e) => setFilterValue(e.target.value)}
			placeholder="Фильтр..."
			{...props}
		/>
	) : null;
};

export default UserHeaderFilter;
