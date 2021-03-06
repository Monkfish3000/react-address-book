import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar"; 

function App() {
  return (
    <div>
     
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        img="https://avatars.githubusercontent.com/u/68614621?v=4"
      />
      <Card
        name={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
        img={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
        img={contacts[1].imgURL}
      />

      <Card
        name={contacts[2].name}
        tel={contacts[2].phone}
        email={contacts[2].email}
        img={contacts[2].imgURL}
      />

      <Card
        name={contacts[3].name}
        tel={contacts[3].phone}
        email={contacts[3].email}
        img={contacts[3].imgURL}
      />
    </div>
  );
}

export default App;
