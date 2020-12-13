import React from 'react';
import GroupIcon from '@material-ui/icons/Group';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ISidebarListItem } from 'components/Sidebar';

export const studentSideBarList : ISidebarListItem[] = [
  {
    title: 'Education Sets',
    icon: <DashboardIcon />,
    path: '#1',
  },
  {
    title: 'Lessons',
    icon: <ListAltIcon />,
    path: '#2',
  },
  {
    title: 'Schedule',
    icon: <ScheduleIcon />,
    path: '#3',
  }
];

export const adminSideBarList: ISidebarListItem[] = [
  {
    title: 'Education Sets',
    icon: <DashboardIcon />,
    path: '#1',
  },
  {
    title: 'Students',
    icon: <GroupIcon />,
    path: '#2',
  },
  {
    title: 'Teachers',
    icon: <RecordVoiceOverIcon />,
    path: '#3',
  },
  {
    title: 'Lessons',
    icon: <ListAltIcon />,
    path: '#4',
  },
  {
    title: 'Schedule',
    icon: <ScheduleIcon />,
    path: '#5',
  }
];


export const teacherSideBarList: ISidebarListItem[] = [
  {
    title: 'Education Sets',
    icon: <DashboardIcon />,
    path: '#1',
  },
  {
    title: 'Students',
    icon: <GroupIcon />,
    path: '#2',
  },
  {
    title: 'Lessons',
    icon: <ListAltIcon />,
    path: '#4',
  },
  {
    title: 'Schedule',
    icon: <ScheduleIcon />,
    path: '#5',
  }
];
