import { Input } from 'components/common'
import PageLayout from 'components/common/PageLayout'
import React, { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
	const [formFields, setFormFields] = useState({username: '', password: ''})

	const handleInputChange = (e) => {
		e.persist()
		setFormFields(s => ({
			...s,
			[e.target.name]: e.target.value
		}))
	}

	return (
		<PageLayout>
			<h1>Login</h1>
			<Form>
				<Input 
					value={formFields.username}
					onChange={handleInputChange}
					type="text"
					name="username" 
					placeholder="Username"/>
				<Input 
					value={formFields.password}
					onChange={handleInputChange}
					type="password"
					name="password" 
					placeholder="Password"/>
			</Form>
		</PageLayout>
	)
}

const Form = styled.form`
	width: 100%;
	max-width: 400px;
	background-color: white;
	border: 1px solid #eee;
	padding: 16px;
	box-sizing: border-box;
	color: black;
	border-radius: 4px;
`

export default Login
