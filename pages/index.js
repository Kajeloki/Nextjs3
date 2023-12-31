import MeetupList from "../components/meetups/MeetupList";
//import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import {MongoClient} from 'mongodb';
import Head from 'next/head';

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg",
//     address: "Some address 1, 23456 Some City",
//     description: "To jest pierwsze spotkanie!",
//   },
//   {
//     id: "m2",
//     title: "A second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg",
//     address: "Some address 1, 23456 Some City",
//     description: "To jest drugie spotkanie!",
//   },
// ];

const Home = (props) => {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name='description' content="Jakiś tam content"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://piotrkw200:1kropkana@cluster0.rpejprg.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
