import { useEffect, useState } from "react";

export default function RoomsPage() {
  const baseUrl = "https://ludwigs-club-penguin-lib.azurewebsites.net/";
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const response = await fetch(baseUrl + "rooms");

    const data = await response.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  console.log(rooms);

  return (
    <>
      <h1>Explore the rooms and all its action!</h1>
    </>
  );
}
