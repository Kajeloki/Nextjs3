import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupId = () => {
  return (
    <>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg"
        title="A first meetup"
        address="Some address 1, 23456 Some City"
        description="To jest drugie spotkanie!"
      />
    </>
  );
};

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params:{
          meetupId: 'm2'
        }
      }   
    ]
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg",
        id: meetupId,
        title:"A first meetup",
        address:"Some address 1, 23456 Some City",
        description:"To jest drugie spotkanie!"
      }
    }
  }
}

export default MeetupId;
