import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = (e) => {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-white font-bold text-4xl mb-2'>Currency Converter</h1>

        <form className='flex flex-col justify-center items-center' onSubmit={convert}>

          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <button className='bg-blue-600 hover:bg-blue-800 transition-colors duration-300 ease-in-out text-white cursor-pointer px-4 py-3 rounded-lg absolute top-81 border-2'
            onClick={swap}
          >SWAP</button>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <button type='submit' className=' bg-blue-600
          hover:bg-blue-800 transition-colors duration-300 ease-linear text-white px-4 py-3 rounded-lg cursor-pointer'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

        </form>
      </div>
    </>
  )
}

export default App
