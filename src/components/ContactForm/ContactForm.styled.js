import { Form } from 'formik';
import styled from 'styled-components';

export const Conteiner = styled(Form)`
display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: fit-content;
    gap: 20px;
	margin-top: 10px;
`
export const Label = styled.label`
display:flex;
flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
`
export const Err = styled.p`
color: red;
    font-size: 13px;
`
export const Btn = styled.button`
display: flex;
    justify-content: center;
    align-items: center;
	padding: 0 25px;
	margin: 0 0 0 15px;
	outline: none;
	border: 1px solid #fff;
	border-radius: 50px;
	height: 33px;
	line-height: 46px;
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
	color: #fff;
	background-color: #3775dd;
	box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;  
	vertical-align: top;
	transition: box-shadow 0.2s;
`