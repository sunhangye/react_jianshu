import styled from 'styled-components';

export const LoginWrapper = styled.div `
  z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
  background: #eee;
  text-align: center;
`

export const LoginBox = styled.div `
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
`;

export const Title = styled.div `
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  text-align: center;
  p {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    padding: 10px;
    display: inline-block;
  }
`;

export const Input = styled.input `
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  box-sizing: border-box;
  &.restyle  {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
`;

export const Button = styled.button `
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #42c02e;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  &.sign-in-button {
    background: #3194d0;
  }
`;