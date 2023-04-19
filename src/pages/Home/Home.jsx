import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRoom from '../SingleRoom/SingleRoom';

const Home = () => {
  const hotel = useLoaderData();
  const rooms = hotel.rooms;
  return (
    <div>
      <h2>Home</h2>
      {
        rooms.map(room =>
          <SingleRoom
            key={room.room_id}
            room={room}
          >
          </SingleRoom>)
      }
    </div>
  );
};

export default Home;