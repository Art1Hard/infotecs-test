import { useFetchUser } from "@src/lib/hooks/user";
import { Error, Loading } from "@components/ui/status";
import DetailSection from "./Section";

interface UserDetailProps {
	userId: number | undefined;
}

const UserDetail = ({ userId }: UserDetailProps) => {
	const { user, fetchUser, isLoading, isError } = useFetchUser(userId);

	if (isLoading) return <Loading />;
	if (isError) return <Error onClick={fetchUser} />;

	return (
		user && (
			<div className="flex flex-col items-center">
				<img
					src={user.image}
					className="text-center"
					alt={`${user.lastName} изображение`}
				/>
				<h2 className="text-center mb-2 font-semibold">
					{user.lastName} {user.firstName} {user.maidenName}
				</h2>

				<p className="mb-2">Возраст: {user.age}</p>

				<DetailSection title="Место жительства">
					<p>
						Координаты: {user.address.coordinates.lat};{" "}
						{user.address.coordinates.lng}
					</p>
					<p>Страна: {user.address.country}</p>
					<p>Город: {user.address.city}</p>
					<p>
						Штат: {user.address.state}. Код: {user.address.stateCode}
					</p>
					<p>Адрес: {user.address.address}</p>
					<p>Почтовый индекс: {user.address.postalCode}</p>
				</DetailSection>

				<DetailSection title="Параметры">
					<p>Рост: {user.height}</p>
					<p>Вес: {user.weight}</p>
				</DetailSection>

				<DetailSection title="Личные данные">
					<p>Телефон: {user.phone}</p>
					<p>Email: {user.email}</p>
				</DetailSection>
			</div>
		)
	);
};

export default UserDetail;
