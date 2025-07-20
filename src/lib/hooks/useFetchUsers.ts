import type { IUserDataResponse } from "@src/lib/types/user";
import { useEffect, useState } from "react";
import { LIMIT } from "@lib/config";
import type { ColumnFiltersState, SortingState } from "@tanstack/react-table";

const getUrlWithParams = (
	limit: number,
	skip: number,
	sorting: SortingState,
	filtering: ColumnFiltersState
): string => {
	const baseUrl =
		filtering.length > 0
			? `https://dummyjson.com/users/filter`
			: `https://dummyjson.com/users`;

	const params = new URLSearchParams();

	// фильтрация
	if (filtering.length > 0) {
		params.append("key", filtering[0].id);
		params.append("value", String(filtering[0].value));
	}

	// пагинация
	params.append("limit", String(limit));
	if (skip > 0) {
		params.append("skip", String(skip));
	}

	// сортировка
	if (sorting.length > 0) {
		params.append("sortBy", sorting[0].id);
		params.append("order", sorting[0].desc ? "desc" : "asc");
	}

	return `${baseUrl}?${params.toString()}`;
};

const useFetchUsers = (
	sorting: SortingState,
	filtering: ColumnFiltersState,
	skip: number
) => {
	const [userData, setUserData] = useState<IUserDataResponse | null>(null);
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchUsers = async () => {
		try {
			setIsError(false);
			setIsLoading(true);

			const url = getUrlWithParams(LIMIT, skip, sorting, filtering);
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
	}, [sorting, skip, filtering]);

	return { userData, isError, isLoading };
};

export default useFetchUsers;
