import { useState, useEffect } from "react";
import { Grid, ButtonGroup, Button, Box } from "@mui/material";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <Grid container className="projectContainer">
        {projects.map((project) => (
          <Grid item xs={8} md={4} sx={{ }} className="projectBox">
            <h1>{project.name}</h1>
            <img className="projectImage" src={project.image} alt="Project Display" width="100%" />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </Grid>
        ))}
      </Grid>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
