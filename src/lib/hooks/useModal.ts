import { useState } from "react";

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);

	const close = () => setIsOpen(false);

	return [isOpen, open, close] as const;
};

export default useModal;
