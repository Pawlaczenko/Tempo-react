import {useState, useEffect} from 'react';

const useFetch = (url, page) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`${url}&page=${page}`)
            .then((res) => {
                if(!res.ok) throw Error("Could not fetch the data. Try again later.");
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                (data.tracks.length === 0) ? setError("No results found.") : setError(null);
            })
            .catch(error => {
                setIsPending(false);
                setError(error.message);
            });
        return () => {
            setData([]);
            setError(null);
            setIsPending(true);
        }
    },[url, page]);

    return {data, isPending, error};
}

export default useFetch;
