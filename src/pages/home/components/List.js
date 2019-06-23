import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
class List extends Component {
  render() {
    return (
      <div>
        <ListItem>
          <img className="pic" src="https://p.ssl.qhimg.com/dmfd/125_71_75/t0125402f24540b1ffe.webp?size=357x309" alt=""/>
          <ListInfo>
            <h3 className="title">如果你被这个星座深深的爱上</h3>
            <p className="desc">
              这个星座ta平常不是特别的浪漫，和ta在一起后你会发现ta为了你牺牲了很多很多！ 这个星座会把你牢牢的记在心里，做什么事都会想到你。ta像是一个...
            </p>
          </ListInfo>
        </ListItem>
        <ListItem>
          <img className="pic" src="https://p.ssl.qhimg.com/dmfd/125_71_75/t0172a32000290399b6.webp?size=640x356" alt=""/>
          <ListInfo>
            <h3 className="title">千万不要隔着屏幕爱上一个人</h3>
            <p className="desc">
              1 前几天后台收到一条姑娘的留言， 内容是： 异地恋加网恋， 刚认识不久就在一起， 专门跑来见我一面， 我觉得挺幸运了， 好不容易遇到一个互相喜欢的人。...
            </p>
          </ListInfo>
        </ListItem>
      </div>
    );
  }
}

export default List;
