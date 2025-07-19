import type { IUser } from "@src/lib/types/user";
import UserColumn from "./UserColumn";

const UserItem = ({ user }: { user: IUser }) => {
	const USER_COLUMNS = [
		user.lastName,
		user.firstName,
		user.maidenName,
		user.age,
		user.gender,
		user.phone,
		user.email,
		user.address.country,
		user.address.city,
	];

	return (
		<tr
			key={user.id}
			className="hover:bg-gray-50 border-b border-gray-200 whitespace-nowrap text-sm">
			{USER_COLUMNS.map((column) => (
				<UserColumn key={column}>{column}</UserColumn>
			))}
		</tr>
	);
};

export default UserItem;
