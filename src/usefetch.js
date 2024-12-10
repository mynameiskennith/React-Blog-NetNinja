import { useState,useEffect } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        console.log('Use effect ran');
        setTimeout(()=>{
            fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('Could Not fetch the data');
            }
            return res.json()
        }).then((data)=>{
            console.log(data);
            setError(null);
            setData(data);
            setIsPending(false);
        })
        .catch(e=>{
            // console.log(e.message);
            setError(e.message);
            setIsPending(false);
        })
        },1000)
    },[url]);

    return {data, isPending, error};
}

export default useFetch;