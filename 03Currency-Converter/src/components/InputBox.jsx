import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    return (
        <div className='m-4'>
            <div className='w-xl bg-white px-2 py-4 flex justify-around rounded-lg'>

                <label className='flex flex-col'>
                    {label}
                    <input
                        type="number"
                        placeholder='0'
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        className='border-none focus:outline-none pt-4' />
                </label>

                <label className='flex flex-col'>
                    Choose Currency:
                    <select
                        value={selectCurrency}
                        disabled={currencyDisable}
                        onChange={(e) =>  onCurrencyChange && onCurrencyChange(e.target.value)}
                        name="currency" id="">
                        
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}

                    </select>
                </label>
            </div>
        </div>
    )
}

export default InputBox;
