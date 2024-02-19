import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Characters from "./components/Characters";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [userInput, setUserInput] = useState("");

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    setSimpsons(data);
  };

  console.log(simpsons);
  useEffect(() => {
    getApiData();
  }, []);

  const onUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const onDeleteSimpson = (id) => {
    const index = simpsons.findIndex((item) => {
      return item.id === id;
    });
    const newSimpsons = [...simpsons];
    newSimpsons.splice(index, 1);
    setSimpsons(newSimpsons);
  };

  const onLikeSimpson = (id) => {
    const index = simpsons.findIndex((item) => {
      return item.id === id;
    });
    const newSimpsons = [...simpsons];
    newSimpsons[index].liked = !newSimpsons[index].liked;
    setSimpsons(newSimpsons);
  };

  if (!simpsons) return <p>Loading.....</p>;

  let filteredData = [...simpsons];
  filteredData = filteredData.filter((item) => {
    return item.character.toLowerCase().includes(userInput.toLowerCase());
  });

  let total = 0;
  filteredData.forEach((id) => {
    if (id.liked) {
      total += 1;
    }
  });

  return (
    <>
      <header>
        <Header onUserInput={onUserInput} />
        <h3>Total Likes: {total}</h3>
      </header>
      <main>
        <Characters
          simpsons={filteredData}
          onDeleteSimpson={onDeleteSimpson}
          onLikeSimpson={onLikeSimpson}
        />
      </main>
    </>
  );
};

export default App;
