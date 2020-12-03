import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
import { 
  Appointments, 
  Scheduler, 
  MonthView,
  TodayButton, 
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { useStyles } from './styles';

export const RawSchedule: React.FunctionComponent = () => {
  const classes = useStyles();
  const currentDate = '2020-12-02';
  const schedulerData = [
    { startDate: '2020-12-02T09:45', endDate: '2020-12-02T11:00', title: 'ASKM' },
    { startDate: '2020-12-02T13:00', endDate: '2020-12-02T14:00', title: 'DataAnalysis' },
    { startDate: '2020-12-05T09:45', endDate: '2020-12-05T11:00', title: 'ASKM' },
    { startDate: '2020-12-05T13:00', endDate: '2020-12-05T14:00', title: 'DataAnalysis' },
    { startDate: '2020-12-07T09:45', endDate: '2020-12-07T11:00', title: 'ASKM' },
    { startDate: '2020-12-07T13:00', endDate: '2020-12-07T14:00', title: 'DataAnalysis' },
  ];
  
  return (
    <Box pt={10} textAlign="center">
      <Typography
        className={classes.typog}
        variant="h2"
        component="h2"
        gutterBottom
      >
        Schedule
      </Typography>
      <Box pr={10} pl={5}>
        <Paper>
          <Scheduler
            data={schedulerData}
          >
            <ViewState
              defaultCurrentDate={currentDate}
            />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />

          </Scheduler>
        </Paper>
      </Box>
    </Box>
  );
};
