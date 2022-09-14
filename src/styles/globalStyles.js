import styled from 'styled-components/macro'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
	/* colors */
	--clr-bg: #09080c;
	--clr-bg-primary: #18171f;
	--clr-bg-secondary: #24232c;
	--clr-grey: #817d92;
	--clr-light: #e6e5ea;
	--clr-accent: #a4ffaf;
	--clr-yellow: #f8cd65;
	--clr-orange: #fb7c58;
	--clr-red: #f64a4a;
}

* {
	font-family: 'JetBrains Mono', monospace;
	margin: 0;
	box-sizing: border-box;
	justify-content: center;
	font-size: 18px;
}

html {
  display: flex;
	background: var(--clr-bg);
	color: var(--clr-light);
}
`

export const OuterWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	max-width: 500px;
`

export const InnerWrapper = styled.div`
	background: var(--clr-bg-secondary);
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 0.75em;
	margin-top: 1em;

	@media screen and (min-width: 768px) {
		padding: 1.5em;
	}
`

export const Container = styled.div`
	background: ${(props) => props.background};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

export const HeadingOne = styled.h1`
	color: var(--clr-grey);
	font-size: 1rem;

	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
`

export const GeneratedPassword = styled.h2`
	color: ${(props) => (props.password ? 'var(--clr-light)' : 'var(--clr-grey)')};
	font-size: 24px;

	&:hover,
	&:focus {
		color: var(--clr-grey);
	}

	@media screen and (min-width: 768px) {
		font-size: 32px;
	}
`

export const Span = styled.span`
	color: var(--clr-accent);
	font-size: 1.34rem;

	@media screen and (min-width: 768px) {
		font-size: 32px;
	}
`

export const DocumentIcon = styled.svg`
	cursor: pointer;

	&:hover {
		path {
			fill: var(--clr-light);
		}
	}
`
export const Box = styled.div`
	border: 2px solid var(--clr-light)};
	background: ${(props) => props.backgroundcolor};
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

export const BoxToWeak = styled.div`
	border: none;
	background: var(--clr-red);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

export const BoxWeak = styled.div`
	border: none;
	background: var(--clr-orange);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

export const BoxMedium = styled.div`
	border: none;
	background: var(--clr-yellow);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

export const BoxStrong = styled.div`
	border: none;
	background: var(--clr-accent);
	height: 28px;
	width: 10px;
	margin-left: 0.35em;
`

export const SpanStrength = styled.span`
	text-transform: uppercase;
	align-self: center;
	margin-right: 0.5em;
	color: ${(props) => props.color};
`

export const DivStrength = styled.div`
	display: flex;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`

export const InputRange = styled.input.attrs({ type: 'range' })`
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

export const Button = styled.button`
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

  @media screen and (min-width: 768px) {
    margin: 1em 0;
	}
`

export const Arrow = styled.svg`
	path {
		fill: var(--clr-bg-primary);
	}
`

export const CheckboxIcon = styled.svg`
	position: absolute;
	left: 2.5px;
	top: 12px;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
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

	&:focus {
		border: 2px solid var(--clr-accent);
	}

	&:hover {
		border: 2px solid var(--clr-accent);
	}
`

export const CheckboxWrapper = styled.div`
	position: relative;
	padding-block: 0.5em;
`
