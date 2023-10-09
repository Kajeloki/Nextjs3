import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg",
    address: "Some address 1, 23456 Some City",
    description: "To jest pierwsze spotkanie!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg",
    address: "Some address 1, 23456 Some City",
    description: "To jest drugie spotkanie!",
  },
];

const Home = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return (
    <>
      <MeetupList meetups={loadedMeetups} />
    </>
  );
};

export default Home;
