
export const fetchOptions = (options = {}) => {
    // set content-type and eventually auth headers, and override with options.headers
    const headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        ...options.headers,
    };
    // take the options param, merge headers into it
    return {
        ...options,
        headers,
    };
};
