import { useState } from "react";
import Stats from "./Stats";
import Logo from "./Logo";
import Items from "./Items";
import Form from "./Form";

export let numbers = [];
for (let i = 0; i < 20; i++) {
  numbers[i] = i + 1;
}

const App = function () {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(false);
  return (
    <>
      <Logo />
      <Form items={items} setItems={setItems} />
      <Items
        key={Date.now()}
        items={items}
        setItems={setItems}
        status={status}
        setStatus={setStatus}
      />
      <Stats items={items} />
    </>
  );
};

export default App;
