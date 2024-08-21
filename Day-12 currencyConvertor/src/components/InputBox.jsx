import React, {useId} from 'react'
// rfce is a function that helps you write functions. 
// It's a shortcut for "react function component editor."
function InputBox({
    label, //The label is used for both the "From" and "To" amounts. The "From" amount is the amount that is being converted, and the "To" amount is the amount that is being converted to.
    amount, 
    onAmountChange, // onAmountChange is used for amount change. It is a callback function that is called when the amount is changed.
    onCurrencyChange, //onCurrencyChange is a callkback function that is called when the currency is changed. The function takes the value of the currency as an argument.
    currencyOptions = [], // The app will not crash if an empty array is passed as an argument to the currencyOptions prop. This is because a default value is provided for currencyOptions if no value is passed.
    selectCurrency = "usd",
    amountDisable = false, // The amountDisable prop defaults to false, which means that the amount input field is enabled by default. If the user is not given an account, then the amount input field should be disabled.
    currencyDisable = false,
    className = "", // defult class name
}) {
   const amountInputId = useId()

    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> // You can add CSS from the user's CSS by using {}. This allows you to incorporate the user's styles into your component. 
            <div className="w-1/2"> // string tailwind css
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //Most of the time, JavaScript takes a string value, so I converted the string value to a number.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} //selectcurrency is store
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // If onCurrencyChange is empty, then the value of the currency is taken from the onCurrencyChange property of the target element.
                   
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))} // You must write a key in your code if you want to use a map. The key is used to uniquely identify each item in the map.
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
