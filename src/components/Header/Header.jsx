/* Libraries */
import React from 'react';

/* Styles */
import './Header.css';
import { Grid, Link, Typography } from '@mui/material';

/* Components */

/**
 *
 */
function Header() {
  return (
    <header>
      <Grid container rowSpacing={5}>
        {/* App name (row 1) */}
        <Grid container item>
          <Grid item xs={12} className="title">
            <Typography variant="h1" component="h1">
              <span className="letter-ff0000">C</span>
              <span className="letter-ffa500">O</span>
              <span className="letter-ffff00">L</span>
              <span className="letter-008000">O</span>
              <span className="letter-0000ff">R</span>
              <span> Mixer</span>
            </Typography>
          </Grid>
        </Grid>

        {/* Navigation (row 2) */}
        <Grid container item rowSpacing={3} className="mixing-options">
          {/* Pigment */}
          <Grid
            container
            item
            xs={12}
            md={6}
            rowSpacing={3}
            className="color-type"
          >
            <Grid item xs={12}>
              <Typography variant="h3" component="h2">
                Pigment Mixing
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                variant="body2"
                component="a"
              >
                2 Colors
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                variant="body2"
                component="a"
              >
                3 Colors
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                variant="body2"
                component="a"
              >
                4 Colors
              </Link>
            </Grid>
          </Grid>

          {/* Light */}
          <Grid
            container
            item
            xs={12}
            md={6}
            rowSpacing={3}
            className="color-type"
          >
            <Grid item xs={12}>
              <Typography variant="h3" component="h2">
                Light Mixing
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                variant="body2"
                component="a"
              >
                2 Colors
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                variant="body2"
                component="a"
              >
                3 Colors
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                variant="body2"
                component="a"
              >
                4 Colors
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
