import Modal from "@components/ui/Modal";
import { useFetchUser } from "@src/lib/hooks/user";
import { Error, Loading } from "@components/ui/status";

interface UserDetailProps {
	userId: number | undefined;
	isModalOpen: boolean;
	closeModal: () => void;
}

const UserDetail = ({ userId, isModalOpen, closeModal }: UserDetailProps) => {
	const { user, isLoading, isError } = useFetchUser(userId);

	return (
		<Modal onClose={closeModal} isOpen={isModalOpen}>
			{isLoading && <Loading />}
			{!isLoading && user && (
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

					<h3 className="font-medium">Место жительства</h3>
					<div className="text-center mb-2">
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
					</div>

					<h3 className="font-medium">Параметры</h3>
					<div className="text-center mb-2">
						<p>Рост: {user.height}</p>
						<p>Вес: {user.weight}</p>
					</div>

					<h3 className="font-medium">Личные данные</h3>
					<div className="text-center mb-2">
						<p>Телефон: {user.phone}</p>
						<p>Email: {user.email}</p>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default UserDetail;
