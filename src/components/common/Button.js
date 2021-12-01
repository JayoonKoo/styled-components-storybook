import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const Button = props => {
	return (
		<ButtonStyled {...props} />
	)
}

const ButtonStyled = styled.button`
	color: white;
	background-color: ${p => p.secondary? p.theme.secondaryColor : p.theme.primaryColor};
	font-weight: bold;
	${p => p.large? css`
		padding: 10px;
		border-radius: 5px;
		font-size: 1.5em;
	`: css`
		padding: 8px;
		border-radius: 4px;
		font-size: 1em;
	`}
	box-shadow: none;
	border: none;
	width: 100%;
	display: block;
	white-space: none;
	cursor: pointer;
	&:disabled {
		background-color: #eee;
		color: #666;
		cursor: auto;
	}
`

Button.propTypes = {
	/** 추가적인 버튼인지 판단하는 props */
	secondary: PropTypes.bool,
	/** 비활성화 버튼인지 판단하는 Props */
	disabled: PropTypes.bool,
	/** 큰 버튼을 설정하는 Props */
	large: PropTypes.bool
}


export {Button}
