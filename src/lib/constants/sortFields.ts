import type { ISortField } from "@src/lib/types/sort";

export const SORT_FIELDS: ISortField[] = [
	{ title: "Фамилия", orderKey: "lastName" },
	{ title: "Имя", orderKey: "firstName" },
	{ title: "Отчество", orderKey: "maidenName" },
	{ title: "Возраст", orderKey: "age" },
	{ title: "Пол", orderKey: "gender" },
	{ title: "Телефон", orderKey: "phone" },
	{ title: "Email", orderKey: "email" },
];
