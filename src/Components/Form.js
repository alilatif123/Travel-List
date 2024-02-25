import { useState } from "react";
import { numbers } from "./app";

const Form = function ({ items, setItems }) {
  const [quantity, setquantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleForm = async function (event) {
    event.preventDefault();
    // Create a new item object
    if (!description) {
      return;
    }
    const newItem = {
      quantity: quantity,
      description: description,
      status: false,
    };

    // Update the items state with the new item
    setItems((previousItems) => {
      const updatedItems = [...previousItems, newItem];
      //   console.log(updatedItems);
      return updatedItems;
    });
  };
  return (
    <form className="add-form" onSubmit={handleForm}>
      <h2>What do you need for your 🤩 trip?</h2>

      <select
        value={quantity}
        onChange={(event) => {
          //   console.log(`quantity is ${event.target.value}`);
          return setquantity(event.target.value);
        }}
      >
        {numbers.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
      <input
        placeholder="Item ..."
        type="text"
        onChange={(event) => {
          //   console.log(`Description is ${event.target.value}`);
          setDescription(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
