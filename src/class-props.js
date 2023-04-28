import react from 'react'

export default class Msgbox2 extends React.Component {
    render(){
    const divStyle={
        margin: '10px',
        padding: '5px',
        color: this.props.color,
        backgoundColor: this.props.bgColor,
        fontsize: this.props.fontsize,
        border: this.props.border
    }
    return(
     <div style={divStyle}>{this.props.text}</div>
    )
}
}