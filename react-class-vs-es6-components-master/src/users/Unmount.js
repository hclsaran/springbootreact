import React, {Component} from 'react';


class Unmount extends Component {

    constructor(props){
       super(props);
       this.state={show:true};
    }


    delHeader=()=>{
        this.setState({show:false})
    }

    render(){
        let myHeader;
        if(this.state.show){
            myHeader= <Child/>
        };

        return(
            <div>
                {myHeader}
                <button type="button" onClick={this.delHeader}>Delete from header</button>
            </div>
        )
    }

}
class Child extends React.Component{
    componentWillUnmount(){
       alert('The component  is about to unmounted')
    }
    render(){
return(
<h1> Welcome to the world of ReactJS</h1>
);
    }
}
export default Unmount;