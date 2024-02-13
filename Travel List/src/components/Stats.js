import React from 'react';

export default function Stats({ items }) {

    if (!items.length) return <p className='stats'><em>Start Adding Items To Your List 😄 </em></p>;

    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(packedItems / numItems * 100);

    return <footer className='stats'>

        <em>{percentage === 100 ? 'You Got Everything Ready ✈' : `💼 You Have ${numItems} Items On Your List and You Already Packed ${packedItems} (${percentage}%)`} </em>
    </footer>;
}
