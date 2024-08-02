/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Ensure food_list is not null or undefined
  if (!food_list) {
    return <div className='food-display' id='food-display'>Loading...</div>;
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          {console.log(category, item.category);}
          if (category === "All" || category === item.category) {
            return (
              <FoodItem 
                key={item._id} 
                id={item._id} 
                name={item.name} 
                description={item.description} 
                price={item.price} 
                image={item.image} 
              />
            );
          }
          return null; // Ensure a value is always returned
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
