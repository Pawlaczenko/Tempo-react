module.exports = (apiMethod,page) => {
    const PAGE_LIMIT = 12;
    const API_KEY = process.env.MUSIXMATCH_API_KEY;
    const URL = process.env.MUSIXMATCH_URL;

    const pageString = page ? `&page=${page}&page_size=${PAGE_LIMIT}`:"";    
    return `${URL}/${apiMethod}?apikey=${API_KEY}${pageString}`;
}