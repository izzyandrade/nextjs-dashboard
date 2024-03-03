import { fetchUsers } from '@/app/lib/data';
import { User } from '@/app/lib/models';

export default async function UsersPage() {
	const users: Array<User> = await fetchUsers();
	return (
		<div>
			<h1>
				{users?.map((user) => {
					return (
						<div key={user.email}>
							{user.username} - {user.email}
						</div>
					);
				})}
			</h1>
		</div>
	);
}
