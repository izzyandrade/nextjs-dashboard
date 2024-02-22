'use client';

import { Button } from '@/components/ui/button';
import { MenuItem } from '../menuItems';
import { usePathname } from 'next/navigation';

export default function MenuLink({ title, icon, path }: MenuItem) {
	const pathname = usePathname();

	const isActive = pathname === path;

	return (
		<Button variant={isActive ? 'secondary' : 'default'} className='mb-0.5'>
			<span className='mr-2 w-full'>{icon}</span> {title}
		</Button>
	);
}
