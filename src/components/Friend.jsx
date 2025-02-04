import Button from "./Button";
export default function Friend({
  friend,
  onSelection,
  selectedFriend,
  onDelete,
}) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <div style={{ display: "flex", gap: "8px" }}>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
        <Button
          style={{ backgroundColor: "red" }}
          onClick={() => onDelete(friend)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
