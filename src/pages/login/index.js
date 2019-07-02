import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox,Title, Input, Button  } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Title>
              <p>登录</p>
            </Title>
            <Input className="restyle" placeholder="手机号或邮箱" innerRef={(input) => (this.userName = input)} />
            <Input placeholder="密码" type="password" innerRef={(input) => (this.password = input)} />
            <Button className="sign-in-button" onClick={() => {this.props.loginAction(this.userName, this.password)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
});

const mapDispatch = (dispath) => ({
  loginAction(userName, password) {
    if (userName.value || password.value) {
      // return false;
    }
    dispath(actionCreators.login(userName.value, password.value))
  },
})

export default connect(mapState, mapDispatch)(Login);