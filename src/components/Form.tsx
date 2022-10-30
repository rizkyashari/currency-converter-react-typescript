import React from 'react';
import AmountInput from './AmountInput';
import Currency from './Currency';
import GetExchangeButton from './GetExchangeButton';
 
function Form() {
    return (
        <form className="form" action="#" style={{padding: "0.75em"}}>
            <AmountInput />
            <Currency />
            <GetExchangeButton />
        </form>
    )   
}
   
export default Form;