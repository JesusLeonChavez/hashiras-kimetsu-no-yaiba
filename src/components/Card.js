import React from 'react'
import PropTypes from "prop-types";

import "./Cards.css";

function Card({ title, imageSource }) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInU h-100'>
        <img src={imageSource} alt="a wallpaper" className="card-img-top"/>
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <a href='#!' className='btn btn-outline-secondary rounded-0'>
                Get Info
            </a>
        </div>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string
};

export default Card