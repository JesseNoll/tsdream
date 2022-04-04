
export default function Question(props) {
    var A = 'How did you feel before you went to sleep?'
    var B = 'What did you do before you fell asleep?'
    var C = 'How did you feel upon waking?'
    var D = 'Have you had this dream before?'
    var E = 'Did you enjoy this dream?'
    var F = 'Did you experience any of these in your dream?'
    var G = 'Results'
    var fontSize = (32 - (0.024*(1280-props.width))) 
    var height = (32-((1280-props.height)*.024))
 
    if(props.width<600){
        var width = 25-((1280-props.width)*0.01)
    }
    if((props.width<700)&&(props.width>599)){
        var width = 23-((1280-props.width)*0.01)
    }
    if((props.width<800)&&(props.width>699)){
        var width = 22.5-((1280-props.width)*0.01)
    }
    if((props.width<900)&&(props.width>799)){
        var width = 20-((1280-props.width)*0.01)
    }
    if((props.width<1000)&&(props.width>899)){
        var width = 17.5-((1280-props.width)*0.01)
    }
    if((props.width<1100)&&(props.width>999)){
        var width = 16-((1280-props.width)*0.01)
    }
    if(props.width<1200&&(props.width>1099)){
        var width = 14-((1280-props.width)*0.01)
        }
    if(props.width>1200){
    var width = 13-((1280-props.width)*0.01)
    }
   
   
    if(props.question === props.A) {
        return(
            
            <b style={{
                fontSize: `${fontSize}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width}em`,
                
                lineHeight: `${height}px`,
                position: 'relative',
             
            }}>{props.question}</b>
        )
    }

    if(props.question === B) {
        
        return(

            <b style={{
                fontSize: `${fontSize}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width}em`,
                
                lineHeight: `${height}px`,
                position: 'relative'
            }}>{props.question}</b>
        )
    }
    if(props.question === C) {
        
        return(

            <b style={{
                fontSize: `${fontSize}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width+2}em`,
                
                lineHeight: `${height}px`,
                position: 'relative'
            }}>{props.question}</b>
        )
    }
    if(props.question === D) {
        
        return(

            <b style={{
                fontSize: `${fontSize}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width+2}em`,
                
                lineHeight: `${height}px`,
                position: 'relative'
            }}>{props.question}</b>
        
        )
    }
    if(props.question === E) {
        
        return(

            <b style={{
                fontSize: `${fontSize}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width+4}em`,
                
                lineHeight: `${height}px`,
                position: 'relative'
            }}>{props.question}</b>
        )
    }
    if(props.question === F) {
        
        return(

            <b style={{
                fontSize: `${fontSize}px`,
                color: 'grey',
                textAlign:'center',
                paddingLeft: `${width}em`,
                lineHeight: `${height}px`,
                position: 'relative'
            }}>{props.question}</b>
        )
    }
    if(props.question === G) {
        alert(G)
        return(

            <p3 style={{
               
                
                borderRadius:'25px',
                fontSize:'10px',
                padding:'115px',
                margin:'220px',   
                width: '250px',          
                 
            }}></p3>
        )
    }

}
