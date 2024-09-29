// import React, {useId} from 'react'

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOption  = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//    className= "",
// }) {
//     const amountInputId = useId()
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       {/* Left side for the first input */}
//       <div className="w-1/2">
//         <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//           {label}
//         </label>
        
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisable}
//           value={amount}
//           onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//         />
//     </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
        
//         <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//          value={selectCurrency}
//          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//          disabled = {currencyDisable}
//         >
//           {currencyOption.map((currency) => (<option key={currency}
//            value={currency}>
//             {currency}
//           </option>
        
//            ))}
//         </select>
//       </div>
//     </div>
//   )
// }

// export default InputBox
import React from 'react';

function InputBox({ 
  label,
   amount, 
  onAmountChange, 
  currencyOptions, 
  selectCurrency, 
  onCurrencyChange, 
  amountDisable = false 
  }) {
  return (
    <div className="w-full">
      <label className="text-black/40 mb-2 inline-block">{label}</label>

      {/* Amount Input */}
      <input
        className="outline-none w-full bg-transparent py-1.5 mb-2 border border-gray-300 rounded-lg px-2"
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        disabled={amountDisable}
        placeholder="Amount"
      />
      
      {/* Currency Selector */}
      <select
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
