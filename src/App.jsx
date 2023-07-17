import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {items} from './components/Data'
import Menu from './components/menu'
import Categories from './components/categories';
const allCategories =['all',...new Set(items.map((item)=>item.categories))]; 

function App() {
  // const [count, setCount] = useState(0)
const [menuItems, setMenuItem]=useState(items);
// const [activeCategory, setActiveCategory]=useState('');
const [categories, setCategories]=useState(allCategories);
const filterItem= (categories)=>{
  if(categories=='all'){
    return setMenuItem(items)
  }
  const newItem = items.filter((item)=>item.categories === categories)
  return setMenuItem(newItem);
}
  return (

  <div className='container'> 
<Categories filterItem = {filterItem} categories={categories}/>

<Menu items={menuItems}/>
</div>
  )
}

export default App
