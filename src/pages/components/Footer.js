import * as React from "react";

import { Typography, Container, Link } from "@material-ui/core";

import IconBar from "./IconBar";
import getCurrentPath from "../../utils/getCurrentPath";

const Footer = () => {
  const path = getCurrentPath();
  return (
    <footer>
      <Container className="footer-container">
        <IconBar />
        <Typography className="footer-text" variant="body1">
          Chris VL-Wanek © {new Date().getFullYear()}
        </Typography>
        <Link
          href="https://github.com/crvlwanek/wedding-template"
          underline="none"
        >
          <Typography className="footer-text" variant="body1">
            View the GitHub Repo
          </Typography>
        </Link>
        <Link href={path + "#"} underline="none">
          <Typography className="footer-text" variant="body1">
            Back to top
          </Typography>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
