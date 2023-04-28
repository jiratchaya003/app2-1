import react from 'react'


export default function Msgbox(props){
    const divStyle={
        margin: '10px',
        padding: '5px',
        color: props.color,
        backgoundColor: props.bgColor,
        fontsize: props.fontsize,
        border: props.border
    }
    return(
     <div style={divStyle}>{props.text}</div>
    )
}