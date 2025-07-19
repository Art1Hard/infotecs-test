import useFetchUsers from "@src/lib/hooks/useFetchUsers";
import { useState } from "react";
import SortList from "../sort/SortList";
import UserList from "./UserList";
import { LIMIT } from "@lib/config";
import { Pagination } from "@components/pagination";

export default function UserTable() {
	const [order, setOrder] = useState<Record<string, string>>({
		type: "lastName",
		order: "none",
	});

	const [skip, setSkip] = useState(0);
	const { userData, isError, isLoading } = useFetchUsers(order, skip);

	if (isError) {
		return <div>Произошла ошибка при получении данных!</div>;
	}

	if (!userData) {
		return <div>Данных нет :(</div>;
	}

	return (
		<table className="w-full max-w-[1400px] mx-auto bg-white border border-gray-200 rounded-lg">
			<thead className="bg-gray-100 text-base">
				<tr>
					<SortList
						externalOrderType={order.type}
						isLoading={isLoading}
						onSortChange={(type, order) => setOrder({ type, order })}
					/>
					<th className="py-3 px-6 text-center text-gray-700 font-semibold border-b border-gray-300">
						Страна
					</th>
					<th className="py-3 px-6 text-center text-gray-700 font-semibold border-b border-gray-300">
						Город
					</th>
				</tr>
			</thead>
			<tbody>
				<UserList users={userData.users} isLoading={isLoading} />
				<Pagination
					totalPages={Math.ceil(userData.total / LIMIT)}
					currentPage={Math.floor(skip / LIMIT) + 1}
					onPageChange={(page) => setSkip((page - 1) * LIMIT)}
					onPageIncrement={() => setSkip(skip + LIMIT)}
					onPageDecrement={() => setSkip(skip - LIMIT)}
				/>
			</tbody>
		</table>
	);
}
