import React from 'react';


const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "http://sites.psu.edu/jiyoonpassionblog/wp-content/uploads/sites/21669/2015/02/20140603181421_7159.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg"
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://chefjulieyoon.com/wp-content/uploads/2011/12/Kimbop-4.jpg"
  }
];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function Food({ name, picture }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}
export default App;
