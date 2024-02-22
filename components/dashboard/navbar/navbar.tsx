'use client';

import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className='container'>
			<div className='title'>{pathname.split('/').pop()}</div>
			<div className='menu'>
				<div className='search'>
					{/* searchIcon */}
					<Input placeholder='Search...' className='input' />
				</div>
			</div>
		</div>
	);
}
