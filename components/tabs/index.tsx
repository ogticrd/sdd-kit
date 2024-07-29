import React, { SyntheticEvent, useState } from 'react';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: ITabPanel) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export interface ITabsProps {
  titles: string[];
  children: any[];
}

export const Tabs = ({ titles, children }: ITabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MUITabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {titles.map((title, index) => (
            <Tab key={index} label={title} {...a11yProps(index)} />
          ))}
        </MUITabs>
      </Box>
      {children.map((child, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {child}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
