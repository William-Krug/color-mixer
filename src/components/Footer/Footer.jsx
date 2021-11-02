/* Libraries */
import React from 'react';

/* Styles */
import './Footer.css';
import { Divider, Grid, Link, Typography } from '@mui/material';

/* Components */

/**
 *
 */
function Footer() {
  return (
    <footer>
      {/* <Divider /> */}

      {/* Footer Details */}
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        className="footer-details"
      >
        {/* Copyright */}
        <Grid item xs={6}>
          <Typography variant="subtitle1" component="p">
            &copy; ValourCode 2021
          </Typography>
        </Grid>

        {/* Definitions */}
        <Grid item xs={3}>
          <Link
            href="#"
            color="inherit"
            underline="none"
            variant="body2"
            component="a"
          >
            <Typography variant="subtitle1" component="p">
              Definitions
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
