import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store/index';
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDtail(this.props.match.params.id);
  };
  
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getDtail(id) {
    dispatch(actionCreators.getDtail(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));