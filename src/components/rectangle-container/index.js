function RectangleContainer(props) {
    const {height="128px",width="256px",backgroundColor="#FFFFFF"} = props
    return ( <div style={{height:height,width:width,backgroundColor:backgroundColor,border: '1px solid #DFE0EB',borderRadius: '8px',padding:'8px'}}>
        {props.children}
    </div> );
}

export default RectangleContainer;