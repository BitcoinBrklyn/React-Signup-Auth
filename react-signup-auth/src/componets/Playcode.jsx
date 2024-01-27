import React, { useState } from "react";

export const Playcode = () => {
  // A const variable thats takes in two var's
  const [buttonClicked, setButtonClicked] = useState(false);

  // const variable that stores the state of setbuttonClicked var & is set to (True/On) once clicked
  const handleClick = () => {
    setButtonClicked(true);
  };

  // Const Var name isGoingOut holds a boolean (true or false)
  const isGoingOut = true;

  // Ternary Operator allows us to put a if else statement into a single line!
  let answer = isGoingOut ? "Yes" : "No";

  const user = {
    name: "Kanye West",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFxPmJb5b2ohzOZ2tbbS3fcal0_gqht3Uh28LUDU070lANJfX",
    imageSize: 90,
  };

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{answer}</h1>
      </div>
      {/* Button on dom */}
      <button onClick={handleClick}>Click me</button>
      {/* Conditional Rendering! = Example*/}
      {buttonClicked && <p>Button Clicked</p>}
      <>Empty Div</>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
  );
};

export default Playcode;
