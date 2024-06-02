export default function Box(props) {

const styles = {
    backgroundColor: props.on ? 'white' : 'black'
}

    return (
        <div 
            className="box" 
            style={styles} 
            onClick={props.toggle}
        ></div>
    )
}