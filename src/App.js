import './App.css'
import styled from 'styled-components/macro'

function App() {
	// const handleSubmit = () => {
	// 	console.log('submitted')
	// }

	return (
		<OuterWrapper>
			<h1>Password Generator</h1>
			<InnerWrapper>
				<Container>
					<GeneratedPassword>password</GeneratedPassword>
					<Span>
						<svg width='21' height='24' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z'
								fill='#A4FFAF'
							/>
						</svg>
					</Span>
				</Container>
			</InnerWrapper>
			<InnerWrapper>
				<Container>
					Character Length<Span>XX</Span>
				</Container>

				<Form>
					<InputRange type='range' id='charlength' name='charlength' min='0' max='20' step='1' value='10' />

					<Label>
						<Input type='checkbox' id='upper' name='upper' />
						Include Uppercase Letters
					</Label>
					<Label>
						<Input type='checkbox' id='upper' name='upper' />
						Include Lowercase Letters
					</Label>
					<Label>
						<Input type='checkbox' id='upper' name='upper' />
						Include Numbers
					</Label>
					<Label>
						<Input type='checkbox' id='upper' name='upper' />
						Include Symbols
					</Label>
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
				<Button>
					Generate{' '}
					<svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
						<path fill='#24232C' d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z' />
					</svg>
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

const GeneratedPassword = styled.h2`
	color: var(--clr-light);
`

const Span = styled.span`
	color: var(--clr-accent);
	font-size: 1.5rem;
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
	padding-top: 1em;
`

const InputRange = styled.input`
	margin-block: 1em;
`
const Input = styled.input`
	margin-right: 1em;
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
	border: none;
	padding: 1em;
`

export default App
