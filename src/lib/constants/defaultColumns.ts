import { createColumnHelper } from "@tanstack/react-table";
import type { IUser } from "../types/user";

const columnHelper = createColumnHelper<IUser>();

export const TABLE_COLUMNS = [
	columnHelper.accessor("lastName", {
		header: "Фамилия",
		minSize: 50,
		maxSize: 500,
	}),
	columnHelper.accessor("firstName", {
		header: "Имя",
		minSize: 50,
		maxSize: 500,
	}),
	columnHelper.accessor("maidenName", {
		header: "Отчество",
		minSize: 50,
		maxSize: 500,
	}),
	columnHelper.accessor("age", {
		header: "Возраст",
		minSize: 50,
		maxSize: 500,
	}),
	columnHelper.accessor("gender", {
		header: "Пол",
		minSize: 50,
		maxSize: 500,
	}),
	columnHelper.accessor("phone", {
		header: "Телефон",
		minSize: 50,
		maxSize: 500,
	}),
	columnHelper.accessor("email", {
		header: "Email",
		minSize: 50,
		size: 300,
		maxSize: 500,
		enableSorting: false,
		enableColumnFilter: false,
	}),
	columnHelper.accessor("address.country", {
		header: "Страна",
		minSize: 50,
		maxSize: 500,
		enableSorting: false,
		enableColumnFilter: false,
	}),
	columnHelper.accessor("address.city", {
		header: "Город",
		minSize: 50,
		maxSize: 500,
		enableSorting: false,
		enableColumnFilter: false,
	}),
];
