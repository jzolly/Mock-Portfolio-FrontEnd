import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(props) {
  return (
    <div>
      <a className="gitHubLink" href="https://github.com/jzolly"><GitHubIcon sx={{ color: '#c9e265', fontSize: 48}}/></a>
      <a className="linkedInLink" href="https://www.linkedin.com/in/jessie-zollinger-logic-creativity/"><LinkedInIcon sx={{ color: '#af8fc4', fontSize: 48}}/></a>
      <a className="instagram" href="https://www.instagram.com/jzolly/"><InstagramIcon sx={{ color: '#5ce1e6', fontSize: 48}}/></a>
    </div>
  );
}

export default Footer;
