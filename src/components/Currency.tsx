import React from 'react';
import FromCurrency from './FromCurrency';
import ToCurrency from './ToCurrency';
import Exchange from './Exchange';
 
function Currency() {
    return (
        <div className='mb-3'>
            <div className='drop-list d-flex justify-content-between'>
                <FromCurrency />
                <Exchange />
                <ToCurrency />
            </div>
        </div>
    )   
}
   
export default Currency;