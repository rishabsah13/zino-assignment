import React from "react";
import { Card } from "../components/Card";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const Home = () => {
  const [redArr, setRedArr] = useState([]);
  const [blueArr, setBlueArr] = useState([]);
  const [greenArr, setGreenArr] = useState([]);
  const [blackArr, setblackArr] = useState([]);

  /*Function to Remove the cards from the div */

  const removeObject = (arr, id) => {
    const indexOfObject = arr.findIndex((ele) => ele.id === id);
    arr.splice(indexOfObject, 1);
    return arr;
  };

  /*Function to update the information in the cards */
  const addTextinObject = (arr, id, value) => {
    const indexOfObject = arr.findIndex((ele) => ele.id == id);
    arr[indexOfObject].info = value;
    return arr;
  };

  /*Handle the Add button */
  const handleClick = (e) => {
    const { name } = e.target;
    const obj = { id: uuidv4(), info: "X" };
    if (name == "red") {
      setRedArr((prev) => [...prev, obj]);
    } else if (name == "green") {
      setGreenArr((prev) => [...prev, obj]);
    } else if (name == "blue") {
      setBlueArr((prev) => [...prev, obj]);
    } else {
      setblackArr((prev) => [...prev, obj]);
    }
  };

  /*To handle the delete Button */
  const handleDelete = (e) => {
    const { name, id } = e.target;
    if (name === "red") {
      let arr = [...redArr];
      let newRedArr = removeObject(arr, id);
      setRedArr(() => newRedArr);
    } else if (name === "green") {
      let arr = [...greenArr];
      let newGreenArr = removeObject(arr, id);
      setGreenArr(() => newGreenArr);
    } else if (name === "blue") {
      let arr = [...blueArr];
      let newBlueArr = removeObject(arr, id);
      setBlueArr(() => newBlueArr);
    } else {
      let arr = [...blackArr];
      let newblackArr = removeObject(arr, id);
      setblackArr(() => newblackArr);
    }
  };

  /*To handle the Save button */
  const handleSave = (e) => {
    const { id, name, value } = e.target;
    if (name === "red") {
      let arr = [...redArr];
      let newRedArr = addTextinObject(arr, id, value);
      setRedArr(() => newRedArr);
    } else if (name === "green") {
      let arr = [...greenArr];
      let newGreenArr = addTextinObject(arr, id, value);
      setGreenArr(() => newGreenArr);
    } else if (name === "blue") {
      let arr = [...blueArr];
      let newBlueArr = addTextinObject(arr, id, value);
      setBlueArr(() => newBlueArr);
    } else {
      let arr = [...blackArr];
      let newblackArr = addTextinObject(arr, id, value);
      setblackArr(() => newblackArr);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <h1>Red Cards</h1>
          <button
            hidden={redArr.length < 8 ? false : true}
            name="red"
            onClick={handleClick}
            style={{
              backgroundColor: "red",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            Add Card
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              border: "5px solid grey",
              width: "200px",
              alignItems: "center",
              height: "700px",
            }}
          >
            {redArr?.map((ele) => {
              return (
                <Card
                  key={ele.id}
                  color="red"
                  ele={ele}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                />
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <h1>Blue Cards</h1>
          <button
            hidden={blueArr.length < 8 ? false : true}
            name="blue"
            onClick={handleClick}
            style={{
              backgroundColor: "blue",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            Add Card
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              border: "5px solid grey",
              width: "200px",
              alignItems: "center",
              height: "700px",
            }}
          >
            {blueArr?.map((ele) => {
              return (
                <Card
                  key={ele.id}
                  color="blue"
                  ele={ele}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <h1>Green Cards</h1>
          <button
            hidden={greenArr.length < 8 ? false : true}
            name="green"
            onClick={handleClick}
            style={{
              backgroundColor: "green",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            Add Card
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              border: "5px solid grey",
              width: "200px",
              alignItems: "center",
              height: "700px",
            }}
          >
            {greenArr?.map((ele) => {
              return (
                <Card
                  key={ele.id}
                  color="green"
                  ele={ele}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <h1>Black Cards</h1>
          <button
            hidden={blackArr.length < 8 ? false : true}
            style={{
              backgroundColor: "black",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
            }}
            name="black"
            onClick={handleClick}
          >
            Add Card
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              border: "5px solid grey",
              width: "200px",
              alignItems: "center",
              height: "700px",
            }}
          >
            {blackArr?.map((ele) => {
              return (
                <Card
                  key={ele.id}
                  color="black"
                  ele={ele}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
