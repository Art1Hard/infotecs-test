import PaginationButton from "./PaginationButton";
import usePagination from "@src/lib/hooks/usePagination";

interface PaginationProps {
	totalPages: number;
	skip: number;
	onPageChange: (skip: number) => void;
}

const Pagination = ({ totalPages, skip, onPageChange }: PaginationProps) => {
	const { pages, currentPage, onClickPage, onPageIncrement, onPageDecrement } =
		usePagination(totalPages, skip);

	return (
		<tr>
			<td colSpan={9} className="py-3 px-6">
				<ul className="flex items-center justify-center gap-x-4 text-md font-bold">
					<li>
						<PaginationButton
							disabled={currentPage <= 1}
							onClick={() => {
								onPageChange(onPageDecrement());
							}}>
							&lt;
						</PaginationButton>
					</li>
					{pages.map((page) => (
						<li key={page}>
							<PaginationButton
								disabled={currentPage === page}
								onClick={() => onPageChange(onClickPage(page))}>
								{page}
							</PaginationButton>
						</li>
					))}

					<li>
						<PaginationButton
							disabled={currentPage === totalPages}
							onClick={() => onPageChange(onPageIncrement())}>
							&gt;
						</PaginationButton>
					</li>
				</ul>
			</td>
		</tr>
	);
};

export default Pagination;
