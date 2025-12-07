import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
            count2: 1
        }
        console.log("Constructor")
    }
    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count + 2
                    })
                }}></button>
                <p>count: {this.state.count}</p>
                <p>count2: {this.state.count2}</p>
                <h2>Location: North</h2>
                <h2>insta: @i_a_m_yug</h2>
                {console.log("render")}
            </div>
        );
    };
};

export default User;