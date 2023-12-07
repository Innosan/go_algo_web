export type Security = {
	secid: string;
	shortname: string;
	secname: string;
};

export enum serviceFilename {
	MARK_UP = "data_markup.py",
	DATASET_GENERATION = "data_gen.py",
	BACK_TESTING = "calc_profit.py",
	NEURAL_LEARNING = "edu_neural.py",
}

export const statuses = {
	0: {
		icon: "ui/",
		title: "В очереди",
	},
	1: {
		icon: "ui/ic_status_in_process",
		title: "В работе",
	},
	2: {
		icon: "ui/ic_selected",
		title: "Выполнен",
	},
	3: {
		icon: "Выполнен",
		title: "С ошибкой",
	},
};
