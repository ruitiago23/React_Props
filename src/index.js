import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);

  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Queen of Hearts"
      img="https://www.dictionary.com/e/wp-content/uploads/2018/04/Queen-of-Hearts.jpg"
      tel=" +123 123 123"
      email="emailofthequeen@hearts.com"
    />

    <input id="fName" />
  </div>,
  document.getElementById("root")
);
