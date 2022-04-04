export default function Apply(props) { 
    var font = (31 - (0.024*(1280-props.width)))
    var pos = (21-((1280-props.width)*.02))
    var pad = 21-((1280-props.width)*0.02)
    var height = 5//31-((630-props.height)*0.02)

    if((props.width<800)&&(props.width>599)){
        
        var width = 21-((1280-props.width)*0.01)
    }
    if((props.width>799)&&(props.width<1000)){
        
        var width = 19.5-((1280-props.width)*0.01)
    }
    if((props.width>999)&&(props.width<1150)){
       
        var width = 15.5-((1280-props.width)*0.01)
    }
     if(props.width<600){
        
     var width = 21.5-((1280-props.width)*0.01)
    }
    if(props.width>1149){
       
    var width = 14-((1280-props.width)*0.01)
    }
    if(props.apply === props.A) {
        return(
            <label style={{
                fontSize: `${font}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width}em`,
                lineHeight: `${height}em`,
                position: 'absolute',
            }}>Choose all that apply</label>
        )
    }
     if(props.apply === props.B) {
         alert('applyb')
        return(
            <label style={{
                fontSize: `${font}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width}em`,
                lineHeight: `${height}em`,
                position: 'absolute',
            }}>Choose all that apply</label>
           
        )
    }
     
        
    if(props.apply === props.C) {
        return(
            <label style={{
                fontSize: `${font}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width}em`,
                lineHeight: `${height}em`,
                position: 'absolute',
            }}>Choose all that apply</label>
        )
    }
    if(props.apply === props.D) {
        return(
            <label style={{
                width: '40%',
                left: '40%',
                fontSize: '25px',
                textAlign: 'center',
                lineHeight: '0px',
                display: 'grid',
                position: 'relative'
            }}></label>
        )
    }
    if(props.apply === props.E) {
        return(
            <label style={{
                width: '40%',
                left: '40%',
                fontSize: '25px',
                textAlign: 'center',
                lineHeight: '0px',
                display: 'grid',
                position: 'relative'
            }}></label>
        )
    }
    if(props.apply === props.F) {
        return(
            <label style={{
                width: '40%',
                left: '40%',
                fontSize: '25px',
                textAlign: 'center',
                lineHeight: '0px',
                display: 'grid',
                position: 'relative'
            }}></label>
        )
    }
    if(props.apply === props.G) {
        return(
            <label style={{
                width: '40%',
                left: '40%',
                fontSize: '25px',
                textAlign: 'center',
                lineHeight: '0px',
                display: 'grid',
                position: 'relative'
            }}></label>
        )
    }
    else {
        return(
            <label></label>
        )
    }
}