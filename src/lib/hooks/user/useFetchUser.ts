import { USER_API_URL } from "@src/lib/constants";
import useStatus from "@hooks/useStatus";
import type { IUser } from "@src/lib/types/user";
import { useCallback, useEffect, useState } from "react";

const useFetchUser = (id: number | undefined) => {
	const [user, setUser] = useState<IUser>();

	const {
		isLoading,
		isError,
		enableLoading,
		disableLoading,
		enableError,
		disableError,
	} = useStatus();

	const fetchUser = useCallback(async () => {
		try {
			disableError();
			enableLoading();

			const response = await fetch(`${USER_API_URL}/${id}`);
			const data = (await response.json()) as IUser;

			setUser(data);
		} catch (error) {
			console.error("Error fetching user: ", error);
			enableError();
		} finally {
			disableLoading();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (id) fetchUser();
	}, [id, fetchUser]);

	return { user, fetchUser, isLoading, isError };
};

export default useFetchUser;
