import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Pages from "./pages/Pages";
import Nav from "./pages/Nav";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [userInput, setUserInput] = useState("");
  const [sortSimponsOrder, setSortSimpsonsOrder] = useState("A-Z");

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
    const newSimpsons = [...simpsons];
    const index = newSimpsons.findIndex((item) => {
      return item.id === id;
    });

    newSimpsons.splice(index, 1);
    setSimpsons(newSimpsons);
  };

  const onLikeSimpson = (id) => {
    const newSimpsons = [...simpsons];
    const index = newSimpsons.findIndex((item) => {
      return item.id === id;
    });

    newSimpsons[index].liked = !newSimpsons[index].liked;
    setSimpsons(newSimpsons);
  };

  const onSimpsonsSort = (e) => {
    setSortSimpsonsOrder(e.target.value);
  };

  if (!simpsons) return <p>Loading.....</p>;

  const filteredData = simpsons.filter((item) => {
    return item.character
      .toLowerCase()
      .includes(userInput ? userInput.toLowerCase() : "");
  });

  let total = 0;
  filteredData.forEach((id) => {
    if (id.liked) {
      total++;
    }
  });

  if (sortSimponsOrder && sortSimponsOrder === "A-Z") {
    filteredData.sort((a, b) => {
      if (a.character > b.character) return 1;
      if (a.character < b.character) return -1;
      return 0;
    });
  }
  if (sortSimponsOrder && sortSimponsOrder === "Z-A") {
    filteredData.reverse();
  }

  return (
    <>
      <header>
        <Header onUserInput={onUserInput} onSimpsonsSort={onSimpsonsSort} />
        <Nav />
        <Pages />
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
