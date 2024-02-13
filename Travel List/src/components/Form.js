import React, { useState } from 'react';

export default function Form({ onAddItem }) {

    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = { description, quantity, packed: false, id: Math.random() };
        onAddItem(newItem);
        setDescription('');
        setQuantity(1);

    }
    const descChangeHandler = (e) => {
        setDescription(e.target.value);
    };

    const quantityChangeHandler = (e) => {
        setQuantity(Number(e.target.value));
    };

    return <form className='add-form' onSubmit={handleSubmit}>
        <h3>What Do You Need For Your 😍 Trip ?</h3>
        <select value={quantity} onChange={quantityChangeHandler}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option num={num} id={num} key={num}>
                {num}
            </option>)}
        </select>
        <input type="text" placeholder='items' value={description} onChange={descChangeHandler} />
        <button>Add</button>
    </form>;
}
