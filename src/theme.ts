'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fff',
          },
        },
      },
    },
  },
});
