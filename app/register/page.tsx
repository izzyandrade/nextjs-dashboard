'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { addUser } from '../lib/actions';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { formFields } from './formFields';

const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	email: z.string().email(),
	phone: z.string(),
	address: z.string(),
	password: z.string(),
});

export default function RegisterPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
			email: '',
			phone: '',
			address: '',
		},
	});

	return (
		<div className='flex h-screen flex-col items-center justify-center gap-2'>
			<h4 className='font-bold'>Chatbot Admin Registration</h4>
			<div className='w-[40%] space-y-8 rounded-md border-4 border-slate-800 border-opacity-35 bg-slate-900 p-4 pb-7 shadow-md shadow-slate-900'>
				<Form {...form}>
					<form className='flex flex-col gap-3' action={addUser}>
						{formFields.map((formField) => {
							return (
								<FormField
									key={formField.name}
									control={form.control}
									name={formField.name}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{formField.label}</FormLabel>
											<FormControl>
												<Input
													placeholder={formField.placeholder}
													type={formField.type}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							);
						})}
						<Button
							type='submit'
							className='mt-1 w-[20%]'
							variant={'secondary'}
						>
							Register
						</Button>
					</form>
				</Form>
				<div className='mt-8 flex items-center justify-center text-xs'>
					<span>
						Already have an account? <Link href={'/login'}>Login instead</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
