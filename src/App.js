import './App.css'
import styled from 'styled-components/macro'
import { useState } from 'react'
import { passwordList } from './utils/passwordList'
import { UPPERCASELETTERS, LOWERCASELETTERS, NUMBERS, SYMBOLS } from './utils/characterList'

function App() {
	const [checkedState, setCheckedState] = useState(new Array(passwordList.length).fill(false))

	const [passwordLength, setPasswordLength] = useState(10)
	const [password, setPassword] = useState('')
	const [showText, setShowText] = useState(false)
	const [showStrength, setShowStrength] = useState('')

	console.log(checkedState)

	let selectionOfChars = ''
	let passwordGenerated = ''

	const generatePassword = () => {
		if (checkedState[0]) {
			selectionOfChars += UPPERCASELETTERS
		}
		if (checkedState[1]) {
			selectionOfChars += LOWERCASELETTERS
		}
		if (checkedState[2]) {
			selectionOfChars += NUMBERS
		}
		if (checkedState[3]) {
			selectionOfChars += SYMBOLS
		}

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

	const handleChange = (position, name) => {
		const updatedState = checkedState.map((item, index) => {
			return index === position ? !item : item
		})
		setCheckedState(updatedState)

		console.log(name)

		const passwordStrenght = updatedState.filter((value) => value === true)

		//ändra till switch break??

		if (passwordStrenght.length === 0) {
			console.log('noll')
			setShowStrength('')
		}
		if (passwordStrenght.length === 1) {
			console.log('ett')
			setShowStrength('TO WEAK!')
		}
		if (passwordStrenght.length === 2) {
			console.log('två')
			setShowStrength('WEAK')
		}
		if (passwordStrenght.length === 3) {
			console.log('tre')
			setShowStrength('MEDIUM')
		}
		if (passwordStrenght.length === 4) {
			console.log('fyra')
			setShowStrength('STRONG')
		}
	}

	console.log(showStrength)

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

					{passwordList.map(({ name, text }, index) => {
						return (
							<CheckboxWrapper key={`checkbox-${index}`}>
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
										onChange={() => handleChange(index, name)}
									/>
									{text}
								</label>
							</CheckboxWrapper>
						)
					})}
				</Form>

				<Container background='var(--clr-bg-primary)' padding='0.6em 1em' margin='1em 0'>
					<SpanStrength color='var(--clr-grey)'>Strength</SpanStrength>
					<DivStrength>
						<SpanStrength>{showStrength}</SpanStrength>
						{showStrength === 'TO WEAK!' ? (
							<BoxToWeak></BoxToWeak>
						) : showStrength === 'WEAK' ? (
							<BoxWeak></BoxWeak>
						) : showStrength === 'MEDIUM' ? (
							<BoxMedium></BoxMedium>
						) : showStrength === 'STRONG' ? (
							<BoxStrong></BoxStrong>
						) : (
							<Box></Box>
						)}
						{showStrength === 'WEAK' ? (
							<BoxWeak></BoxWeak>
						) : showStrength === 'MEDIUM' ? (
							<BoxMedium></BoxMedium>
						) : showStrength === 'STRONG' ? (
							<BoxStrong></BoxStrong>
						) : (
							<Box></Box>
						)}
						{showStrength === 'MEDIUM' ? (
							<BoxMedium></BoxMedium>
						) : showStrength === 'STRONG' ? (
							<BoxStrong></BoxStrong>
						) : (
							<Box></Box>
						)}
						{showStrength === 'STRONG' ? <BoxStrong></BoxStrong> : <Box></Box>}
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
const Box = styled.div`
	border: 2px solid var(--clr-light)};
	background: ${(props) => props.backgroundcolor};
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

const BoxToWeak = styled.div`
	border: none;
	background: var(--clr-red);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`
const BoxWeak = styled.div`
	border: none;
	background: var(--clr-orange);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`
const BoxMedium = styled.div`
	border: none;
	background: var(--clr-yellow);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`
const BoxStrong = styled.div`
	border: none;
	background: var(--clr-accent);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
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

const CheckboxIcon = styled.svg`
	position: absolute;
	left: 2.5px;
	top: 12px;
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
	padding-block: 0.5em;
`

export default App
