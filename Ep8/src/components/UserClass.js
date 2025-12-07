import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
        console.log("hello world")
    }
    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>count: {this.state.count}</p>
                <h2>Location: North</h2>
                <h2>insta: @i_a_m_yug</h2>
            </div>
        );
    };
};

export default User;