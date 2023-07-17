import React from 'react'
import './style/menu.css'
const Menu = ({items}) => {
  return (
    <main>
      <h1 className='title-menu'>Our Menu</h1>
    <div className='container'>
      <div className='row-item'>
      {items.map((item=>{
 const {id,name,image,desc,price} = item;
 return(
 <div key={id} className='menuList'>
    <div className='top-card'>
  <img src={image} alt={image} width='350px' className='photo'></img>
  </div>
  <div className='bottom-card'>
  <h3 className='title'>{name} <span className='price'>{price}</span></h3>
  <p className='desc'>{desc}</p>
</div>
  </div>
)
}))}

      </div>

      
    </div>
    </main>
  )
}

export default Menu
