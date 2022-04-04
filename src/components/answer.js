
 export default function Answer(props) {
    const makeFun = props.makeFun
    var width = (32 - (0.024*(1280-props.width)))
    var pos = (270-(((props.width*.01))))
    var pad = (1280-props.width)*0.002
    var fontSize = (32 - (0.024*(1280-props.width)))
    if(props.t === 'How did you feel before you went to sleep?') {
        return(
         
            <div1>
                <button1 onClick={makeFun(props.events)}>{props.events}</button1> 
                <button2 onClick={makeFun(props.events2)}>{props.events2}</button2>
                <button3 onClick={makeFun(props.events3)}>{props.events3}</button3>
                <button4 onClick={makeFun(props.events4)}>{props.events4}</button4>
                <button5 onClick={makeFun(props.events5)}>{props.events5}</button5>
                <button6 onClick={makeFun(props.events6)}>{props.events6}</button6>
                
                <button onClick={makeFun(props.next1)}>{props.next1}</button>
            </div1> 
        )
    }
    if(props.t === 'What did you do before you fell asleep?') {
        return(
            
            <div1>
                <buttonb1 onClick={makeFun(props.events)}>{props.events}</buttonb1>
                <buttonb2 onClick={makeFun(props.events2)}>{props.events2}</buttonb2>
                <buttonb3 onClick={makeFun(props.events3)}>{props.events3}</buttonb3>
                <buttonb4 onClick={makeFun(props.events4)}>{props.events4}</buttonb4>
                <buttonb5 onClick={makeFun(props.events5)}>{props.events5}</buttonb5>
                <buttonb6 onClick={makeFun(props.events6)}>{props.events6}</buttonb6>
                <buttonN2 onClick={makeFun(props.next1)}>{props.next1}</buttonN2>
            </div1> 
        )
    }
    if(props.t === 'How did you feel upon waking?') {
       
        return(
            <div1>
                <buttonc1 onClick={makeFun(props.events)}>{props.events}</buttonc1>
                <buttonc2 onClick={makeFun(props.events2)}>{props.events2}</buttonc2>
                <buttonc3 onClick={makeFun(props.events3)}>{props.events3}</buttonc3>
                <buttonc4 onClick={makeFun(props.events4)}>{props.events4}</buttonc4>
                <buttonc5 onClick={makeFun(props.events5)}>{props.events5}</buttonc5>
                <buttonc6 onClick={makeFun(props.events6)}>{props.events6}</buttonc6>
                <buttonN3 onClick={makeFun(props.next1)}>{props.next1}</buttonN3>
            </div1> 
        )
    }
    if(props.t === 'Have you had this dream before?') {
       
        return(
            <div1>
                <buttond1 onClick={makeFun(props.events)}>{props.events}</buttond1>
                <buttond2 onClick={makeFun(props.events2)}>{props.events2}</buttond2>
                <buttonN4 onClick={makeFun(props.next1)}>{props.next1}</buttonN4> 
            </div1>
        
            
        )
        }
        
        if(props.t === 'Did you enjoy this dream?') {
            return(
                <div>
                    <buttone1 onClick={makeFun(props.events)}>{props.events}</buttone1>
                    <buttone2 onClick={makeFun(props.events2)}>{props.events2}</buttone2>
                    <buttone3 onClick={makeFun(props.events3)}>{props.events3}</buttone3>
                    <buttonN5 onClick={makeFun(props.next1)}>{props.next1}</buttonN5>  
                </div>
            
                
            )
            }
            if(props.t === 'Did you experience any of these in your dream?') {
                return(
                    <div>
                        <buttonf1 onClick={makeFun(props.events)}>{props.events}</buttonf1>
                        <buttonf2 onClick={makeFun(props.events2)}>{props.events2}</buttonf2>
                        <buttonf3 onClick={makeFun(props.events3)}>{props.events3}</buttonf3>
                        <buttonf4 onClick={makeFun(props.events4)}>{props.events4}</buttonf4>
                        <buttonf5 onClick={makeFun(props.events5)}>{props.events5}</buttonf5>
                        <buttonf6 onClick={makeFun(props.events6)}>{props.events6}</buttonf6>
                        <buttonN6 onClick={makeFun(props.next1)}>{props.next1}</buttonN6>  
                    </div>
                
                    
                )
            }
                if(props.t === 'Results') {
                    return(
                        
                          
                     <p3 style={{
                        whiteSpace: 'normal',
                        color: 'white',
                        fontSize:`${fontSize-4}px`,
                        padding:'1em',
                        margin:'0.1em',   
                        width: '20em',          
                        lineHeight: '2em',
                        paddingLeft: `${pad+480}px`
                    }}>{props.events}</p3>
                    )
                }
}