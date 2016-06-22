import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {
    constructor(){
        super();
        this.state = { txt: ''}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({txt: e.target.value })
    }

    // <div>
    //     <input type="text"
    //     onChange={this.update.bind(this)} />
    //     <h1>{this.state.txt}</h1>
    // </div>

    render(){
        return(
            <div>
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        );
    }
}

// App.propTypes = {
//     txt: React.PropTypes.string
// }

const Widget = (props) => {
    return (
        <div>
            <input type="text"
            onChange={props.update} />
            <h1>{props.txt}</h1>
        </div>
    );
}

// App.defaultProps = {
//     txt: 'default value'
// }
//

class Slider extends React.Component {
    render() {

    }
}

ReactDom.render(
    <App txt="this is props" />,
    document.getElementById('app')
);

// export default App
