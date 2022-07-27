
import { useState, useEffect } from "react";

function Home(props) {
  // create state to hold about data

  const [profileImage, setProfileImage] = useState(null);

  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
    setProfileImage(data.photoFace8bit)
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
      getAboutData()
    }, []);
  

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="homeContainer">
      <div className="sideImage">
      <img onMouseEnter={() => {setProfileImage(about.photoFace8bit)}} onMouseLeave={() => {setProfileImage(about.photoFace)}} className="homeImage" src={profileImage} alt={about.name} height="450px"/>
      </div>
      <h3 >Greetings Fellow <span style={{color:'#5ce1e6'}}>humans</span>,</h3>
      <h1>I'm <span style={{color:'#fd87e0'}}>Jessie-</span> Web Developer and Creative Thinker</h1>
      <hr/>
      <p>{about.about}</p><br/>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

  export default Home;