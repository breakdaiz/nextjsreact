import Head from 'next/head';
import Form from '../components/form';

export default function Home() {

	return (
		<div className='container'>
			<Head>
				<title>Form</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Form />
		</div>
	);
}
