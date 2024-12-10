import React from 'react'
import PropTypes from 'prop-types'

function MenuCard({image, name, region, country, type, time, price, discount}) {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={image} alt={name} />
        {discount && <span className="discount-badge">-{discount}%</span>}
      </div>
      <div className="menu-card-content">
        <h3 className="menu-title">{name}</h3>
        <div className="menu-details">
          <span className="location">{region}, {country}</span>
          <span className="type">{type}</span>
        </div>
        <div className="menu-footer">
          <span className="time">{time} min</span>
          <span className="price">${price}</span>
        </div>
      </div>
    </div>
  )
}



export default MenuCard