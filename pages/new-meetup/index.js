import { Fragment } from "react";
import MeetupList from "../../components/meetups/MeetupList";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetup = () => {

  const router =  useRouter();
  const addMeetupHandler = async(enteredData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data= await response.json();
    router.push('/')
  };
  return (
    <Fragment>
      <h1>Nowe spotkanie</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
