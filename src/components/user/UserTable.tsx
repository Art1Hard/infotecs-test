import useFetchUsers from "@src/lib/hooks/useFetchUsers";
import { useState } from "react";
import { LIMIT } from "@lib/config";
import { Pagination } from "@src/components/user/pagination";
import {
	useReactTable,
	getCoreRowModel,
	type SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { TABLE_COLUMNS } from "@src/lib/constants";
import UserRows from "./UserRows";
import { UserHeader } from "./header";

export default function UserTable() {
	const [sorting, setSorting] = useState<SortingState>([
		{ id: "lastName", desc: false },
	]);

	const [skip, setSkip] = useState(0);
	const { userData, isError, isLoading } = useFetchUsers(sorting, skip);

	const table = useReactTable({
		data: userData?.users ?? [],
		columns: TABLE_COLUMNS,
		columnResizeMode: "onChange",
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		manualSorting: true,
		state: { sorting },
		onSortingChange: setSorting,
	});

	if (isLoading) {
		return <div>Загрузка!!!</div>;
	}

	if (isError) {
		return <div>Произошла ошибка при получении данных!</div>;
	}

	if (!userData) {
		return <div>Данные пока не пришли :(</div>;
	}

	return (
		<div className="p-3 overflow-x-auto">
			<table className="w-[1400px] mx-auto bg-white border border-gray-200 rounded-lg border-collapse">
				<thead className="bg-gray-100 text-base">
					<UserHeader headerGroup={table.getHeaderGroups()} />
				</thead>
				<tbody>
					<UserRows rows={table.getRowModel().rows} />
					<Pagination
						totalPages={Math.ceil(userData.total / LIMIT)}
						skip={skip}
						onPageChange={(skip) => setSkip(skip)}
					/>
				</tbody>
			</table>
		</div>
	);
}
