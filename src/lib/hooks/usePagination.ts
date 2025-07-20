import { LIMIT } from "../config";

const usePagination = (totalPages: number, skip: number) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	const currentPage = Math.floor(skip / LIMIT) + 1;

	const onClickPage = (page: number) => {
		return (page - 1) * LIMIT;
	};

	const onPageIncrement = () => {
		return skip + LIMIT;
	};

	const onPageDecrement = () => {
		return skip - LIMIT;
	};

	return { pages, currentPage, onClickPage, onPageIncrement, onPageDecrement };
};

export default usePagination;
