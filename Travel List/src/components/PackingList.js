import React, { useState } from 'react';
import Item from './Item';

export default function PackingList({ item, onDelete, onUdpate, onClear }) {

    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') sortedItems = item;

    if (sortBy === 'description') sortedItems = item.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems = item.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


    return <div className="list">
        <ul>
            {sortedItems.map((item) => <Item item={item} onDelete={onDelete} onUdpate={onUdpate} key={item.id} />)}
        </ul>
        <div className='actions'>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="input">Sort by Input Order</option>
                <option value="description">Sort by Description</option>
                <option value="packed">Sort by Packed Status</option>
            </select>

            <button disabled={item.length === 0} onClick={onClear} style={item.length === 0 ? { backgroundColor: 'grey' } : {}}>Clear List</button>
        </div>
    </div>;
}
