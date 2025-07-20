import type { IUser } from "@src/lib/types/user";
import { flexRender, type Row } from "@tanstack/react-table";

interface UserListProps {
	rows: Row<IUser>[];
}

const UserRows = ({ rows }: UserListProps) => {
	return rows.map((row) => (
		<tr
			key={row.id}
			className="border-gray-200 hover:bg-gray-50 border-b text-sm">
			{row.getVisibleCells().map((cell) => (
				<td key={cell.id} className="py-1 px-1 break-all">
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</td>
			))}
		</tr>
	));
};

export default UserRows;
