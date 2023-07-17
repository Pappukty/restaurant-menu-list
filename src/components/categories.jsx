import React from 'react'
import './style/categories.css'
const categories = ({filterItem,categories}) => {
  return (
    <div className='container-btn'>
      <div className='row-btn'>
<div className='col-8 mx-auto'>
<div className='categories-tabs'>
  {
    categories.map((categories,index)=>{
      return(
        <button onClick={()=> filterItem(categories)}>{categories}</button>
      )
    })
  }
</div>

</div>
      </div>
    </div>
  )
}

export default categories
