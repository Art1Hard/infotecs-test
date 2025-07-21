import { type MouseEvent, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const closeHandler = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return;
		onClose();
	};

	return (
		isOpen && (
			<div
				className="fixed inset-0 z-10 bg-black/70 flex items-center justify-center cursor-pointer"
				onClick={closeHandler}>
				<div className="bg-white min-w-[300px] p-10 shadow-lg cursor-auto relative">
					<X
						size={20}
						className="absolute top-2 right-2 cursor-pointer"
						onClick={onClose}
					/>
					{children}
				</div>
			</div>
		)
	);
};

export default Modal;
