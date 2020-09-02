import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicFooter from '@/components/footer/footer';
import PublicHeader from '@/components/header/header';

import './msg.less';

class message extends Component {
    //   static propTypes = {
    //     proData: PropTypes.object.isRequired,
    //     getProData: PropTypes.func.isRequired,
    //     togSelectPro: PropTypes.func.isRequired,
    //     editPro: PropTypes.func.isRequired,
    //   }

    state = {
        alertStatus: false, //弹框状态
        alertSystemInfo:[//系统消息


        ],
        datalist:[{
            notice:'评论',
            atcion:'动态',
            origin:'你的动态',
            userHeadPic:'',
            username:'你的弟弟'
        },{
            notice:'点赞',
            atcion:'评论',
            origin:'你的评论',
            userHeadPic:'',
            username:'哈朋友'
        }]
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
        console.log(val,'what it ')
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
                <PublicHeader title='我的通知' record />
                <div className="common-top">
                    <div className="pic">
                        {/* <img src="../../" alt=""/> */}
                    </div>
                    <div className="classitem">
                        <span>系统通知</span>
                        {/* {this.state.datalist[0].msg} */}
                    </div>
                </div>
                <div className="common-wrap">
                    {
                        this.state.map((item,index)=>{
                            return <div className="shap-wrpa">
                                <span className="name">{item.username}</span>
                                <span ></span>
                            </div>
                        })
                    }
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
})(message);