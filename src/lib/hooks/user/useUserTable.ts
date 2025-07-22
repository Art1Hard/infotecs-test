import useFetchUsers from "@src/lib/hooks/user/useFetchUsers";
import { useState } from "react";
import {
	useReactTable,
	getCoreRowModel,
	type SortingState,
	getSortedRowModel,
	type ColumnFiltersState,
} from "@tanstack/react-table";
import { TABLE_COLUMNS } from "@src/lib/constants";
import useModal from "@src/lib/hooks/useModal";

const useUserTable = () => {
	const [isModalOpen, openModal, closeModal] = useModal();
	const [userId, setUserId] = useState<number>();

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

	return {
		table,
		users: { userData, fetchUsers },
		status: { isError, isLoading },
		userId: { userId, setUserId },
		modal: { isModalOpen, openModal, closeModal },
		pagination: { skip, setSkip },
	};
};

export default useUserTable;
