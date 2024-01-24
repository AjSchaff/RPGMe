'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HeroHistory from './HeroHistory';
import { HeroHistoryCareer, HeroHistoryWeb3 } from '../../constants';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="rpgui-container framed-golden-2"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          className="from-inherit"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#FFF',
            },
          }}
        >
          <Tab className="rpgui-button" label="Web3" {...a11yProps(0)} />
          <Tab className="rpgui-button mx-1" label="Career" {...a11yProps(1)} />
          <Tab className="rpgui-button" label="About" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HeroHistory entries={HeroHistoryWeb3} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HeroHistory entries={HeroHistoryCareer} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
