'use client';

import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import SearchInput from '@/components/dashboard/navbar/searchInput/searchInput';

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className='container'>
			<div className='title'>{pathname.split('/').pop()}</div>
			<div className='menu'>
				<div className='search'>
					<SearchInput />
				</div>
			</div>
		</div>
	);
}
