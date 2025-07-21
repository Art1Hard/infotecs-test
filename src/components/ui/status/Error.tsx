import type { ButtonHTMLAttributes } from "react";

const Error = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<div className="flex flex-col items-center justify-center gap-2 py-10 text-red-600 h-screen">
			<svg
				className="w-6 h-6 text-red-500"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<p className="text-sm font-medium">
				Произошла ошибка при загрузке данных.
			</p>
			<button
				className="mt-2 px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
				{...props}>
				Повторить
			</button>
		</div>
	);
};

export default Error;
