import { connect, connections } from 'mongoose';
import Error from 'next/error';

export const connectToDB = async () => {
	const currentConnection: { isConnected: number } = { isConnected: 0 };
	try {
		await connect(process.env.MONGODB_URL as string);
		currentConnection.isConnected = connections[0].readyState;
	} catch (error: any) {
		console.log('connection error: ', error.message);
	}
};
