import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "http://sites.psu.edu/jiyoonpassionblog/wp-content/uploads/sites/21669/2015/02/20140603181421_7159.jpg",
    rating: 4.7
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.9
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://chefjulieyoon.com/wp-content/uploads/2011/12/Kimbop-4.jpg",
    rating: 4.5
  }
];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {/* {console.log(foodILike.map(renderFood))} */}
      {foodILike.map(renderFood)}
    </div>
  );
}
export default App;
