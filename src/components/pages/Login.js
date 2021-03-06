import { Button, Input, PageLayout, PasswrodInput, Spinner } from "components/common";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		return () => {
			if(timeout) {
				clearTimeout(timeout)
			}
		}
	}, [])

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		timeout = setTimeout(() => {
			setLoading(false)
		}, 2000)
	}

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
				{loading ? <Spinner /> : 
				<>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          type="text"
          name="username"
          placeholder="Username"
        />
        <PasswrodInput
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
        />
				</>
				}
				<Button large type="submit" disabled={loading}>
					{loading ? 'Loading...' : 'Login'}
				</Button >
				{!loading && 
					<>
						<div className="alt-text">
							or
						</div>
						<Button secondary type="button">
							Register
						</Button>
					</>
				}
      </Form>
    </PageLayout>
  );
};

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

	.alt-text {
		text-align: center;
		margin: 10px 0;
	}
`;

export default Login;
