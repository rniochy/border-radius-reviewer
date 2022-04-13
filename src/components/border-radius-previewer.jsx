import React , {useState, useEffect} from 'react';
import './border-radius-previewer.css'

const BorderRadiusPreviewer = () => {
    const [bordersValue, setBordersValue ] = useState("");
    // const [border_top_left, setBorder_top_left ] = useState(5);
    // const [border_bottom_left, setBorder_bottom_left ] = useState(5);
    // const [border_top_right, setBorder_top_right ] = useState(5);
    // const [border_bottom_right, setBorder_bottom_right ] = useState(5);

    useEffect(()=>{
       let { border_top_left }= bordersValue;
    },[bordersValue])

    let value_ =""; 
    const onChangeHandler = (e =>{
         const {name,value} = e.target
        value_ += value;
        
        if(value_.match(" ")){
            value_ = value_.replace(" ", "px ") 
            setBordersValue({...bordersValue, [name]:value_});
            console.log(bordersValue)
        }
        value_+="px"
        setBordersValue({...bordersValue, [name]:value_});
    }) 
    
   
  

    return (
        <div className="content_app">
            <section className='section-content_body'>
                <article>
                 <label>Border Top Left</label>
                 <input type="text"  onChange={onChangeHandler} name="border_top_left" placeholder='type value' />
                 <label>Border Top Right</label>
                 <input type="text"  onChange={onChangeHandler} name="border_top_right" placeholder='type value' />
                 <label>Border Bottom Left</label>
                 <input type="text" onChange={onChangeHandler} name="border_bottom_left" placeholder='type value' />
                 <label>Border Bottom Right</label>
                 <input type="text"  onChange={onChangeHandler} name="border_bottom_right" placeholder='type value' />
                </article>

                 <div style={  bordersValue ? {
                     WebkitBorderTopLeftRadius: `${bordersValue.border_top_left}` ,
                     BorderTopLeftRadius: `${bordersValue.border_top_left}`,
                     WebkitBorderTopRightRadius: `${bordersValue.border_top_right}px`,
                     BorderTopRightRadius: `${bordersValue.border_top_right}px`,
                     WebkitBorderBottomRightRadius: `${bordersValue.border_bottom_right}px`,
                     BorderBottomRightRadius: `${bordersValue.border_bottom_right}px`,
                     WebkitBorderBottomLeftRadius: `${bordersValue.border_bottom_left}px`,
                     BorderBottomLeftRadius: `${bordersValue.border_bottom_left}px`,                  
                        }: 
                        {/** Is retuned when the value no it was changed */}
                    }
                        className="box-with-border-radius">
                            {/* {console.log(bordersValue.border_top_left)} */}
                 </div>
            </section>
        </div>
    );
}

export default BorderRadiusPreviewer;
