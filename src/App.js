import './App.css'
import { useState } from 'react'
import {
	GlobalStyle,
	OuterWrapper,
	InnerWrapper,
	Container,
	HeadingOne,
	GeneratedPassword,
	Span,
	DocumentIcon,
	Box,
	BoxToWeak,
	BoxWeak,
	BoxMedium,
	BoxStrong,
	SpanStrength,
	DivStrength,
	Form,
	InputRange,
	Button,
	Arrow,
	CheckboxIcon,
	Checkbox,
	CheckboxWrapper,
} from './styles/globalStyles'
import { passwordList } from './utils/passwordList'
import { UPPERCASELETTERS, LOWERCASELETTERS, NUMBERS, SYMBOLS } from './utils/characterList'

function App() {
	const [checkedState, setCheckedState] = useState(new Array(passwordList.length).fill(false))

	const [passwordLength, setPasswordLength] = useState(10)
	const [password, setPassword] = useState('')
	const [showText, setShowText] = useState(false)
	const [showStrength, setShowStrength] = useState('')

	const handleChange = (position) => {
		const updatedState = checkedState.map((item, index) => {
			return index === position ? !item : item
		})
		setCheckedState(updatedState)

		const passwordStrenght = updatedState.filter((value) => value === true)

		if (passwordStrenght.length === 0) {
			setShowStrength('')
		}
		if (passwordStrenght.length === 1) {
			setShowStrength('TO WEAK!')
		}
		if (passwordStrenght.length === 2) {
			setShowStrength('WEAK')
		}
		if (passwordStrenght.length === 3) {
			setShowStrength('MEDIUM')
		}
		if (passwordStrenght.length === 4) {
			setShowStrength('STRONG')
		}
	}

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

	return (
		<>
			<GlobalStyle />
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
											onChange={() => handleChange(index)}
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
							<path
								fill='#24232C'
								d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z'
							/>
						</Arrow>
					</Button>
				</InnerWrapper>
			</OuterWrapper>
		</>
	)
}

export default App
