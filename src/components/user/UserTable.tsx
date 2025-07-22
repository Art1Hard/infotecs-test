import { LIMIT } from "@lib/config";
import { Pagination } from "@src/components/user/pagination";
import UserRows from "./UserRows";
import { UserHeader } from "@components/user/header";
import { Error } from "@components/ui/status";
import { UserDetail } from "@components/user/detail";
import useUserTable from "@src/lib/hooks/user/useUserTable";
import Modal from "@components/ui/Modal";
import { useMemo } from "react";

export default function UserTable() {
	const {
		table,
		users: { userData, fetchUsers },
		pagination: { skip, setSkip },
		status: { isLoading, isError },
		userId: { userId, setUserId },
		modal: { isModalOpen, openModal, closeModal },
	} = useUserTable();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const rows = useMemo(() => table.getRowModel().rows, [table, userData]);

	return (
		<div className="p-3 overflow-x-auto">
			<Modal onClose={closeModal} isOpen={isModalOpen}>
				<UserDetail userId={userId} />
			</Modal>

			{isError && <Error rootClassName="h-screen" onClick={fetchUsers} />}

			<table className="w-[1400px] mx-auto bg-white border border-gray-200 rounded-lg border-collapse">
				<thead className="bg-gray-100 text-base">
					<UserHeader headerGroup={table.getHeaderGroups()} />
				</thead>
				<tbody>
					<UserRows
						rows={rows}
						isLoading={isLoading}
						onClickRow={(userId) => {
							openModal();
							setUserId(userId);
						}}
					/>
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
