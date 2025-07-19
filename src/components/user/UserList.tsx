import type { IUser } from "@src/lib/types/user";
import UserItem from "./UserItem";

interface UserListProps {
	users: IUser[];
	isLoading: boolean;
}

const UserList = ({ users, isLoading }: UserListProps) => {
	if (isLoading)
		return (
			<tr>
				<td colSpan={9}>
					<div className="py-3 px-6 flex items-center justify-center h-[800px]">
						<div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-t-blue-600" />
					</div>
				</td>
			</tr>
		);

	return users.map((user) => <UserItem key={user.id} user={user} />);
};

export default UserList;
