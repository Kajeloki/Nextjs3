import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg',
        address: 'Some address 1, 23456 Some City',
        description: 'To jest pierwsze spotkanie!' 
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/1024px-Munchen_collage.jpg',
        address: 'Some address 1, 23456 Some City',
        description: 'To jest drugie spotkanie!' 
    }
]

const Home = () =>{
return <>
<h1>Strona Domowa</h1>
<MeetupList meetups={DUMMY_MEETUPS}/>
</>
}

export default Home;