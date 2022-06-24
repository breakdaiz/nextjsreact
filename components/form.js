import React from 'react';
import { useState } from 'react';

const form = () => {
	const [gender, setGender] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);

	const [selectedItems, setItems] = useState({
		languages: [],
		response: [],
	});

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('name', e.target.name.value);
		console.log('gender', e.target.gender.value);
		console.log('age', e.target.age.value);
		console.log('languages', selectedItems.languages);
	};

	const handleChange = (e) => {
		const { value, checked } = e.target;
		const { languages } = selectedItems;

		console.log(`${value} is ${checked}`);

		if (checked) {
			setItems({
				languages: [...languages, value],
				response: [...languages, value],
			});
		} else {
			setItems({
				languages: languages.filter((e) => e !== value),
				response: languages.filter((e) => e !== value),
			});
		}
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				{/* name */}
				<div>
					<input
						placeholder='Name'
						type='text'
						value={name}
						name='name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				{/* Gender */}
				<div onChange={(e) => setGender(e.target.value)}>
					<h4>Gender</h4>
					<input type='radio' value='Male' name='gender' /> Male
					<input type='radio' value='Female' name='gender' /> Female
				</div>

				{/* AGE */}
				<div>
					<h4>Age</h4>
					<input
						placeholder='Enter Age'
						type='number'
						value={age}
						name='age'
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
				<div>
					<label>Javascript</label>
					<input
						type='checkbox'
						name='languages'
						value='Javascript'
						id='programmingLanguage'
						onChange={handleChange}
					/>
					<label>Java</label>
					<input
						type='checkbox'
						name='languages'
						id='programmingLanguage'
						value='Java'
						onChange={handleChange}
					/>

					<label>React JS</label>
					<input
						type='checkbox'
						name='languages'
						id='programmingLanguage'
						value='Reactjs'
						onChange={handleChange}
					/>
					<label>C+++</label>
					<input
						type='checkbox'
						name='languages'
						id='programmingLanguage'
						value='cplus'
						onChange={handleChange}
					/>
					<label>Phyton</label>
					<input
						type='checkbox'
						name='languages'
						id='programmingLanguage'
						value='Phyton'
						onChange={handleChange}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

export default form;
