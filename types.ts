export type Security = {
	secid: string;
	shortname: string;
	secname: string;
};

enum serviceFilename {
	MARK_UP = "data_markup.py",
	DATASET_GENERATION = "data_gen.py",
	BACK_TESTING = "calc_profit.py",
	NEURAL_LEARNING = "edu_neural.py",
}
