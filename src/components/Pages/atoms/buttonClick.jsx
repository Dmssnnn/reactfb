export default function Button ({width,height,backgroundColor,Value , onClick}) {
    return (
        <button className="loginButton" style={{width : width , height : height, backgroundColor : backgroundColor, }} onClick={onClick}>{Value}</button>
    )
}
