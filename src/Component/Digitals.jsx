
import React, { use } from 'react';
import Digital from './Digital';

const Digitals = ({getDigitalsPromises,cards, setCards}) => {
    const digitals = use(getDigitalsPromises);
    return (
        <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-5 mt-4 px-3'>
            {
                digitals.map(digital => <Digital key={digital.id} digital={digital} cards={cards} setCards={setCards} ></Digital>)
            }
        </div>
    );
};

export default Digitals;