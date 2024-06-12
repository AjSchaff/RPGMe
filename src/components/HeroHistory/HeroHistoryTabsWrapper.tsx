'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HeroHistory from './HeroHistory';
import { HeroHistoryAbout, HeroHistoryCareer, HeroHistoryWeb3 } from '../../constants';
import { useAppContext } from '@src/app/AppContext';

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
  const { show } = useAppContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          className="from-inherit"
          value={value}
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#FFF',
            },
          }}
        >
          <Tab className="rpgui-button w-48 pt-6" label="Web3" {...a11yProps(0)} />
          {show && <Tab className="rpgui-button mx-1 w-48 pt-6" label="Career" {...a11yProps(1)} />}
          {show && <Tab className="rpgui-button w-48 pt-6" label="About" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HeroHistory entries={HeroHistoryWeb3} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HeroHistory entries={HeroHistoryCareer} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <HeroHistory entries={HeroHistoryAbout} />
      </CustomTabPanel>
    </Box>
  );
}
