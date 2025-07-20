import type { IUser } from "@src/lib/types/user";
import { flexRender, type HeaderGroup } from "@tanstack/react-table";
import cn from "clsx";
import UserHeaderSort from "./UserHeaderSort";
import UserHeaderResizer from "./UserHeaderResizer";

interface UserHeaderProps {
	headerGroup: HeaderGroup<IUser>[];
}

const UserHeader = ({ headerGroup }: UserHeaderProps) => {
	return headerGroup.map((headerGroup) => (
		<tr key={headerGroup.id}>
			{headerGroup.headers.map((header) => (
				<th
					key={header.id}
					colSpan={header.colSpan}
					style={{ width: header.getSize() }}
					className={cn(
						"relative text-center text-sm border py-2 px-1 text-gray-700 font-semibold break-all border-gray-300",
						header.column.getCanSort() && "cursor-pointer"
					)}
					title={
						header.column.getCanSort() ? "Нажмите для сортировки" : undefined
					}
					onClick={header.column.getToggleSortingHandler()}>
					<div className="flex justify-center items-center gap-x-2">
						{flexRender(header.column.columnDef.header, header.getContext())}

						<UserHeaderSort
							isSorted={header.column.getIsSorted()}
							canSort={header.column.getCanSort()}
						/>
					</div>

					<UserHeaderResizer
						canResize={header.column.getCanResize()}
						resizeHandler={header.getResizeHandler}
					/>
				</th>
			))}
		</tr>
	));
};

export default UserHeader;
