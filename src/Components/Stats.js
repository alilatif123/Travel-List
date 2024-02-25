const Stats = function ({ items }) {
  let totalPacked = 0;
  for (let i = 0; i <= items.length - 1; i++) {
    if (items[i].status === true) {
      totalPacked = totalPacked + 1;
    }
  }
  return (
    <div className="stats">
      {items.length === 0 ? (
        <h3>🙄 No Items in the List</h3>
      ) : items.length !== totalPacked ? (
        <h3>
          👜 You have {items.length} items on your list, and you already packed{" "}
          {totalPacked} (
          {Number(Math.round((totalPacked / items.length) * 100))} %)
        </h3>
      ) : (
        <h3 style={{ fontStyle: "italic" }}>
          You got Everything! Ready to go 🚗🚙
        </h3>
      )}
    </div>
  );
};

export default Stats;
