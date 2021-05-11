import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.flaticon.com/svg/vstatic/svg/4598/4598248.svg?token=exp=1620712931~hmac=b37d7789e5ddee0910cd64d3d238c0c2",
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: "https://www.flaticon.com/svg/vstatic/svg/4598/4598248.svg?token=exp=1620712931~hmac=b37d7789e5ddee0910cd64d3d238c0c2",
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://www.flaticon.com/svg/vstatic/svg/4598/4598248.svg?token=exp=1620712931~hmac=b37d7789e5ddee0910cd64d3d238c0c2',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://lh3.googleusercontent.com/proxy/Hxid8EKzSdh02d8b6OEioY9Soafbh17KJWYGojbjCq6-iBOWqnlAPoncMbCSjdZ6QayT0eS_4lqT0iKeBiI5S0n93TlgLfS4WdlTttGyuVtvFzPGRg8NCMpX6mcP1IqEByQkBQbm_GYPXyzXjbXgMcO_CY8WCU0Hd8gQ--WdxLiyLKeei72m0qiZyuDloQlWomHTnu3LYc-4qWB8NFBQNYPa5x2VF_BF0NBBHGkHMcXsq8ZJT20xdKf4_2vm-RTOmN4STpDnWKGfu4V6AfspzsKl-e0Q8YMQoRMstsQnZw',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://www.flaticon.com/svg/vstatic/svg/4598/4598248.svg?token=exp=1620712931~hmac=b37d7789e5ddee0910cd64d3d238c0c2',
    rating: 4.7,
  }
];

function Food({name, image, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

function App() {
  return (
    <div>
      {foodILike.map(({id, name, image, rating}) => {
        return <Food key={id} 
                     name={name} 
                     image={image} 
                     rating={rating}/>;
      })}
    </div>
  );
}

export default App;