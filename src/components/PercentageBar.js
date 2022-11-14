import { propTypes } from "react-bootstrap/esm/Image";

let grade_texts=['Beginner', 'Fine', 'Good', 'Very Good', "Excellent"]
function PercentageBar(props){
    return(
        <div>
            
            <div style={{
                minHeight:"5px",
                backgroundColor: props.backgroundColor
             } }>

                    <div style={{
                        minHeight:"5px",
                        width: props.percentage+"%",
                        maxWidth: props.percentage+"%",
                        backgroundColor: props.foregroundColor
                    } }>
                        
                    </div>
            </div>
            <p style={{
                textAlign: "right",
                margin: "0px"
            }}>{
                grade_texts.find(function(txt, index){
                    let mark =(index+1)*(100/grade_texts.length);
                    if(props.percentage<=mark)
                        return txt;
                })
                
            }</p>


        </div>
    )
}

export default PercentageBar;