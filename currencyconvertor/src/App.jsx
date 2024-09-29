// import { useState } from 'react'
// import { InputBox } from './components'
// import usecurrencyinfo from './hooks/usecurrencyinfo'


// function App() {
//   const [amount,setAmount] = useState(0)
//    const [from,setFrom] = useState("inr")
//    const [to,setTo] = useState("inr")
//    const [convertedAmount, setConvertedAmount] = useState(0)

//    const currencyInfo = usecurrencyinfo(from)

//    const options = object.keys(currencyInfo)

//    const swap = () =>{
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//    }
//    const convert = () =>{
//     setConvertedAmount(amount * currencyInfo[to])
//    }
//    return (
//     <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       }}
//     >
//       <div className="w-full">
//       <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//         <form onSubmit= {(e) =>{
//           e.preventDefault();
//           convert()
//         }}>
       
//           <div className="w-full mb-1">
//             <InputBox
//               label="From"
//               amount={amount}
//               currencyOption={options}
//               onCurrencyChange={(currency)=> setAmount(amount)}
//               selectCurrency={from}
//               onAmountChange={(amount) => setAmount(amount)}
//             />
//           </div>
            
//           <div className='relative w-full h-0.5'>
//               <button 
//               type='button'
//               className='absolute left-1/2
//               -translate-x-1/2
//               -translate-y-1/2 border-2
//               border-white rounded-md
//               bg-blue-600 text-white px-2
//               py-0.5'
//               onClick={swap}
//               >swap</button>
//           </div>

//           <div className=" w-full mt-1 mb-4">
//             <InputBox
//             label="To"
//             amount={convertedAmount}
//            currencyOption={options}
//            onCurrencyChange={(currency) => setTo(currency)}
//             selectCurrency={from}
//             amountDisable
//             />
//           </div>
//           <button type="submit"
//           className="w-full bg-blue-600
//           text-white px-4 py-3 rounded-lg">
//             Convert {from.toUpperCase() } to {to.toUpperCase()}
//           </button>
//         </form>
//       </div>
//       </div>
//     </div>
//    )
// }

// export default App
import { useState } from 'react';
import InputBox from './components/InputBox'; // Assuming InputBox is a default export
import useCurrencyInfo from './hooks/usecurrencyinfo'; // Ensure correct naming

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Get currency information for the 'from' currency
  const currencyInfo = useCurrencyInfo(from);

  // Ensure currencyInfo is available and retrieve the options
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  // Swap function to swap 'from' and 'to' currencies
  const swap = () => {
    const tempFrom = from;
    const tempAmount = amount;
    setFrom(to);
    setTo(tempFrom);
    setAmount(0); // Clear the amount on swap
    setConvertedAmount(0); // Clear the converted amount on swap
  };

  // Convert the amount based on the exchange rate from the currencyInfo hook
  // const convert = () => {
  //   if (currencyInfo && currencyInfo[to]) {
  //     setConvertedAmount(amount * currencyInfo[to]); // Convert based on the exchange rate
  //   }
  // };
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]); // Convert based on the exchange rate
    }
  };
  

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault();
          convert(); // Convert on form submission
        }}>
          {/* InputBox for "From" currency */}
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          
          {/* Swap button */}
          <div className='relative w-full h-0.5 mb-4'>
            <button 
              type='button'
              className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* InputBox for "To" currency */}
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to} // Use "to" for the "To" input
              amountDisable
            />
          </div>

          {/* Convert button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
