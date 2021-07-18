export const getHeaders = (skipCache = false) => {
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
}
