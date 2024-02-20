import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<div>
				<Sidebar />
			</div>
			<div>
				<Navbar />
				{children}
			</div>
		</div>
	);
}
