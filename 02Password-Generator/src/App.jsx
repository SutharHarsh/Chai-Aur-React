import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  const passwordGenerator = useCallback(() => {
    console.log(length)
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*(){}[]`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)

    setShowNotification(true)

    setTimeout(() => {
      setFadeIn(true)
    }, 10)

    setTimeout(() => {
      setFadeIn(false); // trigger fade-out
      setTimeout(() => setShowNotification(false), 300); 
    }, 3000);

  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 pb-10 my-8 bg-gray-800 text-white'>

        {/* Notification */}
        {showNotification && (
          <div className={`mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed left-10 transition-opacity duration-300 ease-in-out
          ${fadeIn ? 'opacity-100' : 'opacity-0'}
        `}>
            ✅ Password Copied!
          </div>
        )}

        <h1 className='text-center py-2 mb-2 text-2xl'>Password Generator</h1>
        <div className='flex justify-center items-center shadow rounded-lg overflow-hidden'>
          <input
            type="text"
            value={password}
            className='outline-0 py-2 px-2 w-full bg-white text-black'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='bg-blue-500 px-2 py-2 cursor-pointer hover:bg-blue-700' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='mt-6'>
          {/* Length Setter */}
          <div className='flex items-center justify-center'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer mr-2'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Number & Character Checkbox */}
          <div className='flex items-center mt-4 justify-center'>
            {/* Number Checkbox */}
            <div className='flex items-center justify-center mr-4'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((pre) => !pre)
                }}
                className='mr-1 cursor-pointer'
              />
              <label>Number Allow</label>
            </div>

            {/* Character Checkbox */}
            <div className='flex items-center justify-center'>
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id='numberInput'
                onChange={() => {
                  setCharacterAllowed((pre) => !pre)
                }}
                className='mx-1 cursor-pointer'
              />
              <label>Character Allow</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
