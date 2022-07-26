
import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
      getAboutData()
    }, []);
  

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="">
      <img src={about.headshot} alt={about.name} height="450px"/>
      <h1>{about.name}</h1>
      <hr/>
      <h3></h3>
      <a href={about.resume}><p>Resume</p></a>
      <p>{about.email}</p>
      <img src={about.photoCurious} alt={about.name} height="450px"/>
      <h3>It me...</h3>
      <p>{about.bio1}</p><br/>
      <p>{about.bio2}</p><br/>
      <p>{about.bio3}</p><br/>
      <h3>Location</h3>
      <p>{about.location}</p>
      <img src={about.photoAdvneture} alt={about.name} height="450px"/>
      <h3>Interests</h3>
      <p>{about.interests}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;