import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return (<div>正在加载...</div>)
  },
  delay: 30000000
});

export default () => <LoadableComponent />