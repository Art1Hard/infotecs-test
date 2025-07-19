import PaginationButton from "./PaginationButton";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	onPageIncrement: () => void;
	onPageDecrement: () => void;
}

const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
	onPageIncrement,
	onPageDecrement,
}: PaginationProps) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<tr>
			<td colSpan={9} className="py-3 px-6">
				<ul className="flex items-center justify-center gap-x-4 text-xl font-bold">
					<li>
						<PaginationButton
							disabled={currentPage <= 1}
							onClick={() => {
								onPageDecrement();
							}}>
							&lt;
						</PaginationButton>
					</li>
					{pages.map((page) => (
						<li key={page}>
							<PaginationButton
								disabled={currentPage === page}
								onClick={() => onPageChange(page)}>
								{page}
							</PaginationButton>
						</li>
					))}

					<li>
						<PaginationButton
							disabled={currentPage === totalPages}
							onClick={() => onPageIncrement()}>
							&gt;
						</PaginationButton>
					</li>
				</ul>
			</td>
		</tr>
	);
};

export default Pagination;
