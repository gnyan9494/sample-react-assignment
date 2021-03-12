export const WIDGET_LIST = {
	highlights: {
		title: 'Highlights',
		API_URL: 'http://13.232.99.42/get_highlight',
	},
	buyers: {
		title: 'Buyers',
		API_URL: 'http://13.232.99.42/get_buyer',
	},
	countries: {
		title: 'Countries',
		API_URL: 'http://13.232.99.42/get_country',
	},
	income: {
		title: 'Income',
		API_URL: 'http://13.232.99.42/get_income',
	},
}

export const POSTMAN_COLLECTION = {
	info: {
		_postman_id: '58c237d4-9a96-492a-a2d7-d35169ca5a3b',
		name: 'assignment',
		schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
	},
	item: [
		{
			name: 'get_buyer',
			request: {
				method: 'GET',
				header: [],
				url: {
					raw: 'http://15.206.168.217/get_buyer',
					protocol: 'http',
					host: ['15', '206', '168', '217'],
					path: ['get_buyer'],
				},
			},
			response: [],
		},
		{
			name: 'get_country',
			request: {
				method: 'GET',
				header: [],
				url: {
					raw: 'http://15.206.168.217/get_country',
					protocol: 'http',
					host: ['15', '206', '168', '217'],
					path: ['get_country'],
				},
			},
			response: [],
		},
		{
			name: 'get_income',
			request: {
				method: 'GET',
				header: [],
				url: {
					raw: 'http://15.206.168.217/get_income',
					protocol: 'http',
					host: ['15', '206', '168', '217'],
					path: ['get_income'],
				},
			},
			response: [],
		},
		{
			name: 'get_highlight',
			request: {
				method: 'GET',
				header: [],
				url: {
					raw: 'http://15.206.168.217/get_highlight',
					protocol: 'http',
					host: ['15', '206', '168', '217'],
					path: ['get_highlight'],
				},
			},
			response: [],
		},
	],
}
