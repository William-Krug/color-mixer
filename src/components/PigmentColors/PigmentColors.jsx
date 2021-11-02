/* Libraries */
import React from 'react';

/* Styles */
import './PigmentColors.css';
import { Box, Typography } from '@mui/material';

/* Components */
import { pigmentColors } from './PigmentColorsList';

/**
 *
 */
function PigmentColors() {
  return (
    <div className="pigment-colors-list">
      {pigmentColors.map((item) => {
        return (
          <Box className="color-specs">
            <Box
              sx={{
                width: '3em',
                height: '3em',
                borderRadius: '15px',
                border: '1px solid #000000',
              }}
              className={item.hexCode}
            ></Box>
            <Box className="color-name">{item.color}</Box>
          </Box>
        );
      })}
    </div>
  );
}

export default PigmentColors;
