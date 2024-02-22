import {
	FastAnswerIcon,
	HomeIcon,
	ScheduleIcon,
	UsersIcon,
	ReportsIcon,
	SettingsIcon,
	SupportIcon,
} from '@/assets/icons';
import { ReactNode } from 'react';

export type MenuItem = {
	title: string;
	path: string;
	icon: ReactNode;
};

export type MenuItems = {
	title: string;
	list: MenuItem[];
};

export const menuItems = [
	{
		title: 'Pages',
		list: [
			{
				title: 'Dashboard',
				path: '/dashboard',
				icon: <HomeIcon />,
			},
			{
				title: 'Users',
				path: '/dashboard/users',
				icon: <UsersIcon />,
			},
			{
				title: 'Fast Answers',
				path: '/dashboard/answers',
				icon: <FastAnswerIcon />,
			},
			{
				title: 'Schedules',
				path: '/dashboard/schedules',
				icon: <ScheduleIcon />,
			},
		],
	},
	{
		title: 'Analytics',
		list: [
			{
				title: 'Reports',
				path: '/dashboard/reports',
				icon: <ReportsIcon />,
			},
		],
	},
	{
		title: 'User',
		list: [
			{
				title: 'Settings',
				path: '/dashboard/settings',
				icon: <SettingsIcon />,
			},
			{
				title: 'Support',
				path: '/dashboard/support',
				icon: <SupportIcon />,
			},
		],
	},
];
