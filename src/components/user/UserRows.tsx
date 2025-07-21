import type { IUser } from "@src/lib/types/user";
import { flexRender, type Row } from "@tanstack/react-table";
import { Loading } from "@components/ui/status";

interface UserListProps {
	rows: Row<IUser>[];
	isLoading: boolean;
	onClickRow?: (userId: number) => void;
}

const UserRows = ({ rows, isLoading, onClickRow }: UserListProps) => {
	if (isLoading)
		return (
			<tr>
				<td colSpan={9} className="py-4 h-[700px]">
					<Loading />
				</td>
			</tr>
		);

	if (rows.length <= 0)
		return (
			<tr>
				<td colSpan={9} className="py-4 text-center text-sm">
					Фильтр ничего не нашёл...
				</td>
			</tr>
		);

	return rows.map((row) => (
		<tr
			key={row.id}
			className="border-gray-200 hover:bg-gray-50 border-b text-sm cursor-pointer"
			onClick={() => onClickRow && onClickRow(row.original.id)}>
			{row.getVisibleCells().map((cell) => (
				<td key={cell.id} className="py-1 px-1 break-all">
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</td>
			))}
		</tr>
	));
};

export default UserRows;
