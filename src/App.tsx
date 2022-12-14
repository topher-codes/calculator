import { useState } from 'react';

const App = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const [operator, setOperator] = useState('');

	const handleClick = (e: any) => {
		const value = e.target.value;
		setInput((prevState) => prevState + value);
	};

	return (
		<div className="container">
			<h1>Calculator</h1>
			<div className="calculator">
				<div className="display" id="display">
					<div className="display__input">{input}</div>
					<div className="display__output">{output}</div>
				</div>
				<button id="equals" onClick={handleClick}>
					=
				</button>
				<button id="zero" onClick={handleClick} value={0}>
					0
				</button>
				<button id="one" onClick={handleClick} value={1}>
					1
				</button>
				<button id="two" onClick={handleClick} value={2}>
					2
				</button>
				<button id="three" onClick={handleClick} value={3}>
					3
				</button>
				<button id="four" onClick={handleClick} value={4}>
					4
				</button>
				<button id="five" onClick={handleClick} value={5}>
					5
				</button>
				<button id="six" onClick={handleClick} value={6}>
					6
				</button>
				<button id="seven" onClick={handleClick} value={7}>
					7
				</button>
				<button id="eight" onClick={handleClick} value={8}>
					8
				</button>
				<button id="nine" onClick={handleClick} value={9}>
					9
				</button>
				<button id="add" onClick={handleClick}>
					+
				</button>
				<button id="subtract" onClick={handleClick}>
					-
				</button>
				<button id="multiply" onClick={handleClick}>
					*
				</button>
				<button id="divide" onClick={handleClick}>
					/
				</button>
				<button id="decimal" onClick={handleClick}>
					.
				</button>
				<button id="clear" onClick={handleClick}>
					AC
				</button>
			</div>
		</div>
	);
};

export default App;
