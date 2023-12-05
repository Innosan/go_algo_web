export type Security = {
	version: number;
	id: number;
	secid: string;
	boardid: string;
	shortname: string;
	prevprice: number;
	lotsize: number;
	facevalue: number;
	status: string;
	boardname: string;
	decimals: number;
	secname: string;
	remarks: string;
	marketcode: string;
	instrid: string;
	sectorid: string;
	minstep: number;
	prevwaprice: number;
	faceunit: string;
	prevdate: string;
	issuesize: number;
	isin: string;
	latname: string;
	regnumber: string;
	prevlegalcloseprice: number;
	currencyid: string;
	sectype: string;
	listlevel: number;
	settledate: string;
	guid: string;
};

enum serviceFilename {
	MARK_UP = "data_markup.py",
	DATASET_GENERATION = "data_gen.py",
	BACK_TESTING = "calc_profit.py",
	NEURAL_LEARNING = "edu_neural.py",
}
