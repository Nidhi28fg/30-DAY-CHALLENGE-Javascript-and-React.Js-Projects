import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // We create an empty object here if there is no data in useState. This prevents the app from crashing.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/curr encies/${currency}.json`)
        .then((res) => res.json()) //In res, data is stored as a string. res.json() helps convert it into a JSON object. 
        .then((res) => setData(res[currency])) // Now in res, data is stored as a json object.
        //All data is passed in SetData. Now setData(res[currency]) helps to access the currency data.
            console.log(data);
    }, [currency]) // The function rerenders whenever there is a change in the currency dipendancy. The function takes the currency as an argument.
    
    console.log(data);
    return data
}

export default useCurrencyInfo;

// This is a custom hook that uses useState. 
// It takes a currency as an argument, and then fetches currency data from an API.
// The data is then stored in the state of the component that uses the hook.
