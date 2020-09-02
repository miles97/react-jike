import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicFooter from '@/components/footer/footer';
import PublicHeader from '@/components/header/header';

import './moment.less';

class Moment extends Component {
    //   static propTypes = {
    //     proData: PropTypes.object.isRequired,
    //     getProData: PropTypes.func.isRequired,
    //     togSelectPro: PropTypes.func.isRequired,
    //     editPro: PropTypes.func.isRequired,
    //   }

    state = {
        alertStatus: false, //弹框状态
        namelist: [
            {
                name: '动态广场',
                value: 1
            },
            {
                name: '附近',
                value: 2
            }
        ],
        alertTip: '简单的后来',
        dataList: [
            {
                username: '野孩子',
                image: 'https://iconfont.alicdn.com/t/e67f962a-1b26-42a5-8ddb-3dcf6ee7470d.png',  //图片展示方法需要加一个过滤器进行
                topic: '人人都是产品经理',//图片展示方法需要加一个过滤器进行
                headimg: 'https://iconfont.alicdn.com/t/e67f962a-1b26-42a5-8ddb-3dcf6ee7470d.png',
                content: `他去散步时不小心受伤了，在电话那头我干着急，问了很多细节，便叫他去药店买我给他发的药。
                一顿给他洗脑这个药有多好，我从小到大有皮外伤都擦这个，不痛也好得快。
                他有点不爽地和我说他不想擦，我心里有点不开心了。（what the hell？！是想当折翼天使了吗？）
                不行！我不能表现出来，他现在肯定很烦躁，不能计较！！然后就听他在碎碎念，一会说擦其他的药，一会说不擦。Ok fine，嗯嗯嗯，都听你的，善变的男人。
                我也就附和着他，等他牢骚发完了他又恢复正常的状态逗我笑了。
                真的是...有时候会被他气死！！简直像个三岁小孩！
                但是，还是请你替我照顾好你自己啊。`,
                like: 55,
                repost: 23,
                messgae: 22,
                timegap:12
            },
            {
                username: '神经病',
                image: 'https://iconfont.alicdn.com/t/e67f962a-1b26-42a5-8ddb-3dcf6ee7470d.png',  //图片展示方法需要加一个过滤器进行
                topic: '随手拍',//图片展示方法需要加一个过滤器进行
                headimg: 'https://iconfont.alicdn.com/t/e67f962a-1b26-42a5-8ddb-3dcf6ee7470d.png',
                content: `分手了一个月，导火索是发现手机撩妹
                明明知道不可能了
                但还是想去找他怎么办
                后来直接微信聊过一次，他直接说他有很多缺点我们不合适之类的
                前几天也借着机会给他发了微信
                但就是感觉回不去了
                每天中午被这个问题困扰休息不好
                我是不是太看不起自己了`,
                like: 22,
                repost: 88,
                messgae: 33,
                timegap:12
            },

            {
                username: '鸡蛋官兵',
                image: 'https://iconfont.alicdn.com/t/e67f962a-1b26-42a5-8ddb-3dcf6ee7470d.png',  //图片展示方法需要加一个过滤器进行
                topic: '随手拍',//图片展示方法需要加一个过滤器进行
                headimg: 'https://iconfont.alicdn.com/t/e67f962a-1b26-42a5-8ddb-3dcf6ee7470d.png',
                content: `分手了一个月，导火索是发现手机撩妹
                明明知道不可能了
                但还是想去找他怎么办
                后来直接微信聊过一次，他直接说他有很多缺点我们不合适之类的
                前几天也借着机会给他发了微信
                但就是感觉回不去了
                每天中午被这个问题困扰休息不好
                我是不是太看不起自己了`,
                like: 22,
                repost: 88,
                messgae: 33,
                timegap:42
            }
        ]
    }
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
    getName(val){
        // if(val)
        // switch(val){
        //     case 1:
        //         console.log('??')
        //         break;
        //     default:
        //         console.log('!!')
        //         break;
        // }
        console.log('???')
    }
    // 选择商品，交由redux进行数据处理，作为全局变量
    togSelect = index => {
        this.props.togSelectPro(index);
    }
    
    //  简单的react生命周期函数问题
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    componentDidMount() {
        if (!this.props.proData.dataList.length) {
            this.props.getProData();
        }
    }

    //return的页面构建问题
    render() {
        return (
            
            <main className="common-con-top">
                <PublicHeader title='动态' record />
                <div className="common-wrap">

                </div>
                <section className="pro-list-cond">
                {
                        this.state.dataList.map((item, index) => {
                            return <div className="wrap-item" key={index} >
                                <div className="head-wrap">
                                    <img src={item.image} alt="话题头像" />
                                    <div className="subject-wrap">
                                        <span>{item.username}</span>
                                        {/* <div><img src={item.headimg} alt="用户头像" />{item.username}发布了</div> */}
                                            <div><span>{item.timegap}分钟前</span></div>
                                    </div>
                                </div>
                                <div className="wrap-content">
                                    {item.content}
                                </div>
                                <div className="commond">
                                    <span className="icon-like" role="img" aria-label='like' onClick={this.getName}>👍{item.like}</span>
                                    <span className="icon-common" role="img" aria-label='message' onClick={this.getName}>📧{item.messgae}</span>
                                    <span className="icon-repost" role="img" aria-label='repost' onClick={this.getName}>🔁{item.repost}</span>
                                </div>
                            </div>
                        })
                    }
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
})(Moment);