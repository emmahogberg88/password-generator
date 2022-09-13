import './App.css'
import styled from 'styled-components/macro'
import { useState } from 'react'
import { passwordList } from './utils/passwordList'

function App() {
	const [checkedUpper, setCheckedUpper] = useState(false)
	const [checkedLower, setCheckedLower] = useState(false)
	const [checkedNumber, setCheckedNumber] = useState(false)
	const [checkedSymbol, setCheckedSymbol] = useState(false)

	const [isChecked, setIsChecked] = useState(false) //test!
	const [checkedState, setCheckedState] = useState(new Array(passwordList.length).fill(false))

	const [passwordLength, setPasswordLength] = useState(10)
	const [password, setPassword] = useState('')
	const [showText, setShowText] = useState(false)
	// const [checkedBoxes, setCheckedBoxes] = useState(0)

	const UPPERCASELETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const LOWERCASELETTERS = 'abcdefghijklmnopqrstuvwxyz'
	const NUMBERS = '0123456789'
	const SYMBOLS = '!@#$&*?|%+-_./:;=()[]{}'

	// console.log(checked)
	// console.log(Object.keys(checked)) //upper

	// const handleSubmit = () => {
	// 	console.log('submitted')
	// }

	// let updatedList = [...checked]
	// const handleChecked = (event) => {
	// 	if (event.target.checked) {
	// 		updatedList = [...checked, event.target.value]
	// 	} else {
	// 		updatedList.splice(checked.indexOf(event.target.value), 1)
	// 	}
	// 	setChecked(updatedList)
	// 	console.log(updatedList)
	// }

	const handleChecked = (event) => {
		if (event.target.id === 'checkedUpper') {
			setCheckedUpper((prev) => !prev)
		}
		if (event.target.id === 'checkedLower') {
			setCheckedLower((prev) => !prev)
		}
		if (event.target.id === 'checkedNumber') {
			setCheckedNumber((prev) => !prev)
		}
		if (event.target.id === 'checkedSymbol') {
			setCheckedSymbol((prev) => !prev)
		}
	}

	// console.log(checkedBoxes)

	let selectionOfChars = ''
	let passwordGenerated = ''

	const generatePassword = () => {
		if (checkedUpper) {
			selectionOfChars += UPPERCASELETTERS
		}
		if (checkedLower) {
			selectionOfChars += LOWERCASELETTERS
		}
		if (checkedNumber) {
			selectionOfChars += NUMBERS
		}
		if (checkedSymbol) {
			selectionOfChars += SYMBOLS
		}

		console.log(selectionOfChars)

		for (let i = 0; i < passwordLength; i++) {
			passwordGenerated += selectionOfChars.charAt(Math.floor(Math.random() * selectionOfChars.length))
		}
		setPassword(passwordGenerated)
	}

	const revealText = () => {
		setShowText((reveal) => !reveal)
	}

	const copyPassword = async (password) => {
		try {
			await navigator.clipboard.writeText(password)

			revealText()

			setTimeout(() => {
				setShowText((reveal) => !reveal)
			}, 2000)
		} catch (err) {
			console.log('error')
		}
	}

	const getStrength = (count) => {
		console.log('hej')
	}

	const handleChange = (position) => {
		const updatedState = checkedState.map((item, index) => {
			return index === position ? !item : item
		})
		setCheckedState(updatedState)

		const passwordStrenght = updatedState.filter((value) => value === true)

		if (passwordStrenght.length === 1) {
			console.log('ett')
		}
		if (passwordStrenght.length === 2) {
			console.log('två')
		}
		if (passwordStrenght.length === 3) {
			console.log('tre')
		}
		if (passwordStrenght.length === 4) {
			console.log('fyra')
		}
	}

	return (
		<OuterWrapper>
			<HeadingOne>Password Generator</HeadingOne>
			<InnerWrapper>
				<Container>
					<GeneratedPassword password={password}>
						{password.length > 0 ? password : 'P4$5W0rD!'}
					</GeneratedPassword>
					<Span onClick={() => copyPassword(password)}>
						{showText && password ? 'COPIED ' : ''}
						<DocumentIcon width='21' height='24' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z'
								fill='#A4FFAF'
							/>
						</DocumentIcon>
					</Span>
				</Container>
			</InnerWrapper>
			<InnerWrapper>
				<Container>
					Character Length<Span>{passwordLength}</Span>
				</Container>

				<Form>
					<InputRange
						type='range'
						id='charlength'
						name='charlength'
						min={0}
						max={20}
						step={1}
						value={passwordLength}
						onChange={(event) => setPasswordLength(event.target.value)}
					/>

					<CheckboxContainer>
						<StyledCheckbox
							id='checkedUpper'
							type='checkbox'
							value='checkedUpper'
							checked={checkedUpper}
							onClick={handleChecked}
							aria-hidden={true}
						>
							<HiddenCheckbox type='checkbox' id='upper' name='upper' />
							<CheckIcon width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
							</CheckIcon>
						</StyledCheckbox>
						<Label>Include Uppercase Letters</Label>
					</CheckboxContainer>

					<CheckboxContainer>
						<StyledCheckbox
							id='checkedLower'
							type='checkbox'
							value='checkedLower'
							checked={checkedLower}
							onClick={handleChecked}
							aria-hidden={true}
						>
							<HiddenCheckbox type='checkbox' id='upper' name='upper' />
							<CheckIcon width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
							</CheckIcon>
						</StyledCheckbox>
						<Label>Include Lowercase Letters</Label>
					</CheckboxContainer>

					<CheckboxContainer>
						<StyledCheckbox
							id='checkedNumber'
							type='checkbox'
							value='checkedNumber'
							checked={checkedNumber}
							onClick={handleChecked}
							aria-hidden={true}
						>
							<HiddenCheckbox type='checkbox' id='upper' name='upper' />
							<CheckIcon width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
							</CheckIcon>
						</StyledCheckbox>
						<Label>Include Numbers</Label>
					</CheckboxContainer>

					<CheckboxContainer>
						<StyledCheckbox
							id='checkedSymbol'
							type='checkbox'
							value='checkedSymbol'
							checked={checkedSymbol}
							onClick={handleChecked}
							aria-hidden={true}
						>
							<HiddenCheckbox type='checkbox' id='upper' name='upper' />
							<CheckIcon width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
							</CheckIcon>
						</StyledCheckbox>
						<Label>Include Symbols</Label>
					</CheckboxContainer>

					{passwordList.map(({ name, text, count }, index) => {
						return (
							<CheckboxWrapper>
								<label htmlFor={`checkbox-${index}`}>
									{checkedState[index] && (
										<CheckboxIcon width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
											<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
										</CheckboxIcon>
									)}
									<Checkbox
										type='checkbox'
										id={`checkbox-${index}`}
										name={name}
										value={name}
										checked={checkedState[index]}
										onChange={() => handleChange(index)}
									/>
									{text}
								</label>
								<p>{checkedState[index] ? 'checked' : 'no'}</p>
								{getStrength(count)}
							</CheckboxWrapper>
						)
					})}

					{/* <CheckboxWrapper>
						<label>
							{isChecked && (
								<CheckboxIcon width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
									<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
								</CheckboxIcon>
							)}
							<Checkbox
								type='checkbox'
								checked={isChecked}
								id='upper'
								name='upper'
								onChange={() => setIsChecked((prev) => !prev)}
							/>
							testar!
						</label>
					</CheckboxWrapper> */}
				</Form>

				<Container background='var(--clr-bg-primary)' padding='0.6em 1em' margin='1em 0'>
					<SpanStrength color='var(--clr-grey)'>Strength</SpanStrength>
					<DivStrength>
						<SpanStrength>MEDIUM</SpanStrength>
						<Box> </Box>
						<Box> </Box>
						<Box> </Box>
						<Box> </Box>
					</DivStrength>
				</Container>
				<Button type='submit' onClick={generatePassword}>
					Generate{' '}
					<Arrow width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
						<path fill='#24232C' d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z' />
					</Arrow>
				</Button>
			</InnerWrapper>
		</OuterWrapper>
	)
}

const OuterWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	max-width: 500px;
`

const InnerWrapper = styled.div`
	background: var(--clr-bg-secondary);
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 0.75em;
	margin-top: 1em;
`

const Container = styled.div`
	background: ${(props) => props.background};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

const HeadingOne = styled.h1`
	color: var(--clr-grey);
	font-size: 1rem;
`

const GeneratedPassword = styled.h2`
	color: ${(props) => (props.password ? 'var(--clr-light)' : 'var(--clr-grey)')};
	font-size: 1.34rem;

	&:hover,
	&:focus {
		color: var(--clr-grey);
	}

	@media screen and (min-width: 768px) {
		font-size: 32px;
	}
`

const Span = styled.span`
	color: var(--clr-accent);
	font-size: 1.34rem;

	@media screen and (min-width: 768px) {
		font-size: 32px;
	}
`

const DocumentIcon = styled.svg`
	cursor: pointer;

	&:hover {
		path {
			fill: var(--clr-light);
		}
	}
`

const SpanStrength = styled.span`
	text-transform: uppercase;
	align-self: center;
	margin-right: 0.5em;
	color: ${(props) => props.color};
`
const DivStrength = styled.div`
	display: flex;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const Label = styled.label`
	padding-left: 1em;
	pointer-events: none;
`

const InputRange = styled.input.attrs({ type: 'range' })`
	-webkit-appearance: none;
	-moz-appearance: none;
	background: ${(props) =>
		`linear-gradient(to right, 
    var(--clr-accent) 0%,
    var(--clr-accent) calc(${props.value}% * 5), 
    var(--clr-bg) ${props.value}%,
    var(--clr-bg) 100%);`};
	outline: 0;
	margin-block: 1em;
	height: 8px;

	::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 28px;
		height: 28px;
		background: var(--clr-light);
		border-radius: 50%;

		&:hover,
		&:focus {
			background: var(--clr-bg);
			border: 2px solid var(--clr-accent);
		}
	}

	::-moz-range-thumb {
		-moz-appearance: none;
		width: 28px;
		height: 28px;
		background: var(--clr-light);
		border-radius: 50%;

		&:hover,
		&:focus {
			background: var(--clr-bg);
			border: 2px solid var(--clr-accent);
		}
	}
`

const CheckboxContainer = styled.span`
	// position: relative;
	margin-right: 1em;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	vertical-align: middle;
	padding-bottom: 1em;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	margin-right: 1em;
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`

const CheckIcon = styled.svg``

const StyledCheckbox = styled.span`
	display: flex;
	align-items: center;
	align-self: baseline;
	width: 18px;
	height: 18px;
	background: ${(props) => (props.checked ? 'var(--clr-accent)' : 'var(--clr-bg-secondary)')};
	border: 2px solid ${(props) => (props.checked ? 'var(--clr-bg-accent)' : 'var(--clr-light)')};
	transition: all 150ms;
	cursor: pointer;

	${CheckIcon} {
		visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	}

	&:focus-within {
		transform: scale(1.2);
	}
`

const Box = styled.span`
	border: 2px solid var(--clr-light);
	background: ${(props) => props.backgroundcolor};
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

const Button = styled.button`
	background: var(--clr-accent);
	color: var(--clr-bg-primary);
	text-transform: uppercase;
	font-size: 1rem;
	padding: 1em;
	border: 1px solid var(--clr-bg-primary);

	&:hover,
	&:focus {
		background: var(--clr-bg-primary);
		color: var(--clr-accent);
		border: 1px solid var(--clr-accent);
	}

  &{Arrow}:hover {
    path {
      fill: var(--clr-accent);
    }
  }
  &{Arrow}:focus {
    path {
      fill: var(--clr-accent);
    }
  }
`

const Arrow = styled.svg`
	path {
		fill: var(--clr-bg-primary);
	}
`

//////////////
const CheckboxIcon = styled.svg`
	position: absolute;
	left: 2px;
	top: 3px;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 18px;
	height: 18px;
	border-radius: none;
	margin-right: 0.5em;
	border: 2px solid var(--clr-light);
	outline: none;
	cursor: pointer;
	border: 2px solid ${(props) => (props.checked ? 'var(--clr-bg-accent)' : 'var(--clr-light)')};
	background: ${(props) => (props.checked ? 'var(--clr-accent)' : 'var(--clr-bg-secondary)')};

	// &:focus-within {
	// 	transform: scale(1.2);
	// }

	// ${CheckboxIcon} {
	// 	visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	// }
`

const CheckboxWrapper = styled.div`
	position: relative;
`

///////////////////////

export default App
