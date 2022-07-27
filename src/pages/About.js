import { Grid } from "@mui/material";
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
    getAboutData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <Grid container className="aboutContainer">
        <Grid item xs={12} md={4} className="leftDiv">
          <img
            className="headShot"
            src={about.headshot}
            alt={about.name}
            height="450px"
          />
          <a
            href={about.resume}
            style={{ color: "#af8fc4", textDecoration: "none" }}
          >
            <p>Resume</p>
          </a>
          <h3>Tech Skills</h3>
          <img className="skillIcon" src="https://img.icons8.com/fluency/48/000000/javascript.png" alt="JS icon"/>
          <img className="skillIcon" src="https://img.icons8.com/color-glass/48/000000/python.png" alt="python icon"/>
          <img className="skillIcon" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html5 icon"/>
          <img className="skillIcon" src="https://img.icons8.com/color/48/000000/css3.png" alt="css3"/>
          <img className="skillIcon" src="https://img.icons8.com/windows/32/000000/django.png" alt="django icon"/>
          <img className="skillIcon" src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongoDB icon"/>
          <img className="skillIcon" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express icon"/>
          <img className="skillIcon" src="https://img.icons8.com/plasticine/100/000000/react.png" alt="react icon"/>
          <img className="skillIcon" src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="node.js icon"/>
          <img className="skillIcon" src="https://img.icons8.com/ios/50/000000/postgreesql.png" alt="postgreSQL icon"/>
          <img className="skillIcon" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-invision-is-the-digital-product-design-platform-logo-tritone-tal-revivo.png" alt="inVision Icon"/>
          <img className="skillIcon" src="https://img.icons8.com/fluency/48/000000/procreate.png" alt="proCreate Icon"/>
          <img className="skillIcon" src="https://img.icons8.com/color/48/000000/figma--v1.png" alt="Figma Icon"/>
          <br/>
          <a target="_blank" href="https://icons8.com/icon/AksudKrBQryM/django" style={{ color: '#c9e265'}}>Skill icons by Icons8</a>
        </Grid>
        <Grid item xs={12} md={8} className="right">
          <h1 className="aboutHeader">It's me...</h1>
          <div className="bio">
            <h3>Location</h3>
            <p>{about.location}</p>
            <h3>Bio</h3>
            <p>{about.bio1}</p>
            <br />
            <p>{about.bio2}</p>
            <br />
            <p>{about.bio3}</p>
            <br />
            <h3>Interests</h3>
            <p>{about.interests}</p>
          </div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
