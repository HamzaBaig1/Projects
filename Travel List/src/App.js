import React, { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];
function App() {

  const [item, setItem] = useState([])

  function handleAddItems(item) {
    setItem((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    setItem(items => items.filter(item => item.id !== id))
  }
  function handleUpdateItem(id) {
    setItem(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are You Sure You Want To Delete All Items ?')

    if (confirmed) setItem([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList item={item} onDelete={handleDeleteItem} onUdpate={handleUpdateItem} onClear={handleClearList} />
      <Stats items={item} />
    </div>
  )
}

export default App


