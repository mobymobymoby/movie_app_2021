import React from 'react';

function Food(props) {
  let { fav } = props;
  return <h3>I like { fav }</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" test={true} />
      <Food fav="돈가스" />
      <Food fav="라면" />
    </div>
  );
}

export default App;