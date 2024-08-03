import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // We create an empty object here if there is no data in useState. This prevents the app from crashing.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/curr encies/${currency}.json`)
        .then((res) => res.json()) //In res, data is stored as a string. res.json() helps convert it into a JSON object. 
        .then((res) => setData(res[currency])) // Now in res, data is stored as a json object.
        //All data is passed in SetData. Now setData(res[currency]) helps to access the currency data.
            console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
