import type { IUserDataResponse } from "@src/lib/types/user";
import { useEffect, useState } from "react";
import { LIMIT } from "@lib/config";

const getUrlWithParams = (
	limit: number,
	skip: number,
	order: Record<string, string>
) => {
	let url = `https://dummyjson.com/users?limit=${limit}`;
	if (skip !== 0) {
		url += `&skip=${skip}`;
	}
	if (order.order !== "none") {
		url += `&sortBy=${order.type}&order=${order.order}`;
	}

	return url;
};

const useFetchUsers = (order: Record<string, string>, skip: number) => {
	const [userData, setUserData] = useState<IUserDataResponse | null>(null);
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchUsers = async () => {
		try {
			setIsError(false);
			setIsLoading(true);

			const url = getUrlWithParams(LIMIT, skip, order);

			const response = await fetch(url);
			const data = (await response.json()) as IUserDataResponse;

			setUserData(data);
		} catch (error) {
			console.error("Error fetching users: ", error);
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [order, skip]);

	return { userData, isError, isLoading };
};

export default useFetchUsers;
