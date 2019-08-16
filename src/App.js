import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "https://swisshansik.files.wordpress.com/2011/10/samgyupsal.jpg"
  },
  {
    name: "Bibimbap",
    image: "https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg"
  },
  {
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image: "http://chefjulieyoon.com/wp-content/uploads/2011/12/Kimbop-4.jpg"
  }
];
function App() {
  return (
  <div>
    <h1>Hello!!!!!</h1>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
  </div>
  );
}

export default App;
