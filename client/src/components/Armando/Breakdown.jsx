import React from 'react';
import StarRating from '../common/StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicBar from './CharacteristicBar.jsx';
import {ratingAverageHelper} from '../../../../helpers/ratingAverageHelper.js';

const Breakdown = (props) => {
  // set a default
  let ratings = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  const characteristics = props.characteristics || {};

  // normalize the ratings
  if (props.ratings) {
    ratings = Object.assign({}, ratings, props.ratings);
  }

  return (
    <div id='breakdown'>
      <span id='starAverage'>
        <p>
          {props.starAverage.toFixed(1)}
        </p>
        <StarRating starCount={props.starAverage} />
      </span>

      <div id='bars'>
        {
          Object.keys(ratings).map(star => (
            <RatingBar starNum={star} starRating={ratings[star]} totalRatings={props.totalRatings}/>
          ))
        }
      </div>
      <div id='characterics'>
        {
          Object.keys(characteristics).map(type => (
            <CharacteristicBar characteristic={type} charRating={characteristics[type].value}/>
          ))

        }
      </div>

    </div>
  );
};

export default Breakdown;