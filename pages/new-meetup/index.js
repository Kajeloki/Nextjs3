import { Fragment } from "react";
import MeetupList from "../../components/meetups/MeetupList";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return (
    <Fragment>
      <h1>Nowe spotkanie</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
