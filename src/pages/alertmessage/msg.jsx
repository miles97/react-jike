import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicFooter from '@/components/footer/footer';
import PublicHeader from '@/components/header/header';

import './msg.less';

class Message extends Component {
    //   static propTypes = {
    //     proData: PropTypes.object.isRequired,
    //     getProData: PropTypes.func.isRequired,
    //     togSelectPro: PropTypes.func.isRequired,
    //     editPro: PropTypes.func.isRequired,
    //   }
    // constructor(props) {
    // super(props);
    state = {
        alertStatus: false, //弹框状态
        alertSystemInfo: [//系统消息
        ],
        datalist: [{
            notice: '评论',
            atcion: '动态',
            origin: '你的动态',
            userHeadPic: '😋', //生产环境返回应该是个数组来着 多个用户点赞
            username: '你的弟弟' //同上
        }, {
            notice: '点赞',
            atcion: '评论',
            origin: '你的评论',
            userHeadPic: '😊',
            username: '哈朋友'
        }, {
            notice: '点赞',
            atcion: '评论',
            origin: '你的评论',
            userHeadPic: '😊',
            username: '哈朋友'
        }, {
            notice: '点赞',
            atcion: '评论',
            origin: '你的评论',
            userHeadPic: '😊',
            username: '哈朋友'
        }, {
            notice: '点赞',
            atcion: '评论',
            origin: '你的评论',
            userHeadPic: '😊',
            username: '哈朋友'
        }, {
            notice: '点赞',
            atcion: '评论',
            origin: '你的评论',
            userHeadPic: '😊',
            username: '哈朋友'
        }
    ],
       date: new Date()
    }
  // }
    /**
     * 添加或删减商品，交由redux进行数据处理，作为全局变量
     * @param  {int} index 编辑的商品索引
     * @param  {int} num   添加||删减的商品数量
     */
    handleEdit = (index, num) => {
        let currentNum = this.props.proData.dataList[index].selectNum + num; //赋值redux的数据
        if (currentNum < 0) {
            return
        }
        this.props.editPro(index, currentNum); //调用redux方法进行数据的变动操作
        
    }
    getName(val) {
        // if(val)
        // switch(val){
        //     case 1:
        //         console.log('??')
        //         break;
        //     default:
        //         console.log('!!')
        //         break;
        // }
        // console.log('???')
        // alert(val)
        console.log(val, 'what it ')
    }
    // 选择商品，交由redux进行数据处理，作为全局变量
    togSelect = index => {
        this.props.togSelectPro(index);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    componentDidUpdate(){
      console.log('nima')
    }
    //  简单的react生命周期函数问题
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    componentDidMount() {
        if (!this.props.proData.dataList.length) {
            this.props.getProData();
        }
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    handleClick = ()=>{
      console.log(this)
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    //return的页面构建问题
    render() {
        // let likeorcomment;
        // if (isLoggedIn) {
        //     likeorcomment = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     likeorcomment = <LoginButton onClick={this.handleLoginClick} />;
        // }

        return (

            <main className="common-con-top">
                <PublicHeader title='我的通知' record showLeft={false} showRight={false} />
                <div className="container">
                    <div className="common-top">
                        <div className="pic">
                        <span role="img" aria-label='like'>📢</span>
                        </div>
                        <div className="classitem" onClick={this.handleClick}>
                            <div>系统通知</div>
                            <div className="bottom"> {this.state.datalist[0].username}给你的{this.state.datalist[0].atcion}{this.state.datalist[0].notice}</div>
                        </div>
                    </div>
                    <div className="name">北京时间{this.state.date.toLocaleTimeString()}</div>
                    <div className="common-wrap">

                        {
                            this.state.datalist.map((item, index) => {
                                return <div className="shap-wrpa" key={index}>
                                    <div className="shap-left">
                                        <div className="left-top">
                                            {
                                                item.notice === '点赞' ?
                                                    <span role="img" aria-label='like' className="like">👍</span>
                                                    :
                                                    <span role="img" aria-label='comment' className="like">📝</span>
                                            }
                                            <span className="name">{item.username} 给{item.origin}{item.notice}</span>
                                        </div>
                                        <span className="img-head" role="img" aria-label='smile'>
                                            {item.userHeadPic}
                                        </span>
                                    </div>

                                    <div className="shap-right">
                                        <span role="img" aria-label='like'>📰</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <section className="pro-list-cond">

                    <PublicFooter className="base-footer" ></PublicFooter>
                </section>


            </main>
        )
    }
}


export default connect(state => ({
    proData: state.proData,
}), {
    getProData,
    togSelectPro,
    editPro
})(Message);