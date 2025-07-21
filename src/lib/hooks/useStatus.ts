import { useState } from "react";

const useStatus = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const enableLoading = () => setIsLoading(true);
	const disableLoading = () => setIsLoading(false);
	const enableError = () => setIsError(true);
	const disableError = () => setIsError(false);

	return {
		isLoading,
		isError,
		enableLoading,
		disableLoading,
		enableError,
		disableError,
	};
};

export default useStatus;
