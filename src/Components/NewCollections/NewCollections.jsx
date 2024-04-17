import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import './NewCollections.css'

const NewCollections = () => {
  return (
      <div className='new-collections'>
                <h1>NEW COLLECTIONS</h1>
                <hr />
                <div className="collections">
                    {new_collections.map((item, i) => (
                        <Item  key={i} id={item.i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))}
                </div>
    </div>
  )
}

export default NewCollections