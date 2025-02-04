import Friend from "./Friend";
export default function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  onDelete,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
