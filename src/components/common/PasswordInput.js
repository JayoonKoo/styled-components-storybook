import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '.';



export const PasswrodInput = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<PasswrodInputWrapper>
				<PasswordInputStyled {...props} />
				<ToggleButton onClick={() => setShowPassword(s => !s)}>
					{showPassword ? 'Hide' : 'Show'}
				</ToggleButton>
			</PasswrodInputWrapper>
			<div>
				{showPassword ? props.value : ''}
			</div>
		</>
	)
}


const ToggleButton = styled.div`
	height: 40px;
	border: 1px solid #ccc;
	box-sizing: border-box;
	font-size: 0.9em;
	display: flex;
	padding: 8px;
	border-left: 0;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	background: white;
	font-weight: none;
	cursor: pointer;
	user-select: none;
	color: black;
`

const PasswrodInputWrapper = styled.div`
	display: flex;
	~div {
		margin-bottom: 8px;
	}
`

const PasswordInputStyled = styled(Input).attrs(() => ({
	type: 'password',
	placeholder: 'Passwrod'
}))`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`
