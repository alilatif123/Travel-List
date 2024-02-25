import { useState } from "react";

const Items = function ({ items, setItems, status, setStatus }) {
  const [sortBy, setSortBy] = useState("input");
  let selectedForSorted = [];
  if (sortBy === "input") {
    selectedForSorted = items;
  }
  if (sortBy === "description") {
    selectedForSorted = items;
    selectedForSorted.sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
    // console.log(selectedForSorted);
  }
  if (sortBy === "status") {
    selectedForSorted = items;
    selectedForSorted.sort((a, b) => {
      return a.status === b.status ? 0 : a.status ? 1 : -1;
    });
  }
  if (sortBy === "quantity") {
    selectedForSorted = items;
    selectedForSorted.sort((a, b) => {
      return a.quantity - b.quantity;
    });
  }
  return (
    <div className="list">
      <ul>
        {selectedForSorted.map((item) => {
          return (
            <li>
              <input
                type="checkbox"
                value={item.status}
                onClick={() => {
                  if (status === false) {
                    item.status = true;
                    return setStatus(true);
                  } else {
                    item.status = false;
                    return setStatus(false);
                  }
                }}
              />
              <h3
                style={
                  item.status === true ? { textDecoration: "line-through" } : {}
                }
              >
                {item.quantity} {item.description}
              </h3>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const newArray = items.filter((element) => element !== item);
                  //jo condition ko meet kare ga wo new array mai a jae ga baki nahi aye ge
                  setItems(newArray);
                }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
      <form
        className="actions"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          <option value={"input"}>SORT BY INPUT ORDER</option>
          <option value={"description"}>SORT BY DESCRIPTION</option>
          <option value={"status"}>SORT BY PACKED STATUS</option>
          <option value={"quantity"}>SORT BY QUANTITY</option>
        </select>
        <button
          onClick={() => {
            const confirmed = window.confirm(
              "Are you sure you want to delete all items"
            );
            if (confirmed) {
              const newEmptyArray = [];
              setItems(newEmptyArray);
            }
          }}
        >
          CLEAR LIST
        </button>
      </form>
    </div>
  );
};

export default Items;
