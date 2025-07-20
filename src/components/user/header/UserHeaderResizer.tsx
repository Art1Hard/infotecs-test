interface UserHeaderResizerProps {
	canResize: boolean;
	resizeHandler: (context?: Document) => (event: unknown) => void;
}

const UserHeaderResizer = ({
	canResize,
	resizeHandler,
}: UserHeaderResizerProps) => {
	return (
		canResize && (
			<div
				onMouseDown={resizeHandler()}
				onTouchStart={resizeHandler()}
				className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none bg-transparent hover:bg-blue-500"
			/>
		)
	);
};

export default UserHeaderResizer;
