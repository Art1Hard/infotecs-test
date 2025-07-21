import useFetchUsers from "@src/lib/hooks/useFetchUsers";
import { useState } from "react";
import { LIMIT } from "@lib/config";
import { Pagination } from "@src/components/user/pagination";
import {
	useReactTable,
	getCoreRowModel,
	type SortingState,
	getSortedRowModel,
	type ColumnFiltersState,
} from "@tanstack/react-table";
import { TABLE_COLUMNS } from "@src/lib/constants";
import UserRows from "./UserRows";
import { UserHeader } from "./header";
import { Error } from "@components/ui/states";

export default function UserTable() {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([
		{ id: "lastName", desc: false },
	]);

	const [skip, setSkip] = useState(0);
	const { userData, fetchUsers, isError, isLoading } = useFetchUsers(
		sorting,
		columnFilters,
		skip
	);

	const table = useReactTable({
		data: userData?.users ?? [],
		columns: TABLE_COLUMNS,
		columnResizeMode: "onChange",
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		manualSorting: true,
		manualFiltering: true,

		state: { sorting, columnFilters },
		onSortingChange: setSorting,
		onColumnFiltersChange: (filters) => {
			const resolvedFilters =
				typeof filters === "function" ? filters(columnFilters) : filters;

			const last = resolvedFilters[resolvedFilters.length - 1];
			setColumnFilters(last ? [last] : []);
			setSkip(0);
		},
	});

	if (isError) {
		return <Error onClick={fetchUsers} />;
	}

	return (
		<div className="p-3 overflow-x-auto">
			<table className="w-[1400px] mx-auto bg-white border border-gray-200 rounded-lg border-collapse">
				<thead className="bg-gray-100 text-base">
					<UserHeader headerGroup={table.getHeaderGroups()} />
				</thead>
				<tbody>
					<UserRows rows={table.getRowModel().rows} isLoading={isLoading} />
					{userData && (
						<Pagination
							totalPages={Math.ceil(userData.total / LIMIT)}
							skip={skip}
							onPageChange={(skip) => setSkip(skip)}
						/>
					)}
				</tbody>
			</table>
		</div>
	);
}
