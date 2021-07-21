import {API_BASE_PATH, SALES_DATA_API} from '../config';

export const generateHeaders = (skipCache = false) => {
    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer token ---------`
    });
    if (skipCache) { // used in refresh data scenario
        return Object.assign({}, headers, {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });
    }
    return headers;
};

export const fetchSalesData = (skipCache) => fetch(
    `/${API_BASE_PATH}/${SALES_DATA_API}`,
    {
        method: "GET",
        headers: generateHeaders(skipCache)
    }
);
