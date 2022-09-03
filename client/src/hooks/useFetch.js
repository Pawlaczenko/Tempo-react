import {useState, useEffect} from 'react';

const useFetch = (options) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let isCancelled = false;
        fetch(`${options.url}`)
            .then((res) => {
                if(!res.ok) throw Error("Could not fetch the data. Try again later.");
                return res.json();
            })
            .then((data) => {
                if(!isCancelled){
                    if(data.status === 'error') throw Error(data.message);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }
            })
            .catch(error => {
                setIsPending(false);
                console.log(error);
                setError(error.message);
            });
        return () => {
            isCancelled = true;
            setData([]);
            setError(null);
            setIsPending(true);
        }
    },[options.url]);

    return {data, isPending, error};
}

export default useFetch;
