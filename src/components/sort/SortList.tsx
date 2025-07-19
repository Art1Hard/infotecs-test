import { SORT_FIELDS } from "@src/lib/constants/sortFields";
import SortToggle, { type SortOrder } from "./SortToggle";

interface SortList {
	externalOrderType: string;
	isLoading: boolean;
	onSortChange: (type: string, order: SortOrder) => void;
}

const SortList = ({ externalOrderType, isLoading, onSortChange }: SortList) => {
	return SORT_FIELDS.map(({ title, orderKey }) => (
		<th
			key={orderKey}
			className="py-3 px-6 text-center text-gray-700 font-semibold border-b border-gray-300">
			<div className="flex items-center justify-center gap-1">
				<SortToggle
					title={title}
					orderKey={orderKey}
					onSortChange={(type, order) => onSortChange(type, order)}
					externalOrderType={externalOrderType}
					disabled={isLoading}
				/>
			</div>
		</th>
	));
};

export default SortList;
