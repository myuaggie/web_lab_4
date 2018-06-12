import React, { Component }  from 'react'
import { hashHistory } from 'react-router'

let CountAll = React.createClass({
    displayName: "CountAll",
    getInitialState: function() {
        return {data:"counting..."}
    },
    componentWillMount:function(){
        this.serverRequest25=$.get('queryCountAll',function(data){
            this.setState({
                data:data
            });
        }.bind(this));
    },
    render:function(){
        return(<p id="countAll">the total number of questions: {this.state.data}</p>)

    }
});

export default CountAll;