
import React, {useState} from "react";

export default function Textfrom(props){
    const handleUpClick =()=>{
        // console.log("hii");
        let convetText=text.toUpperCase();
        updateText(convetText)
        props.viewAlert("Text are converted to Upper case", "success")
    }
    const handleChange=(event)=>{
        // console.log("change value");
        updateText(event.target.value);
    }

    // const wordCount=(text)=>{
    //     let regx = /\s+\S+/;
    //     let numOfWords=text.split(regx);
    //     return numOfWords.length;
    // }

    const clearText=()=>{
        let cleatdata='';
        updateText(cleatdata)
    }

    const[text, updateText]=useState("Enter your content");

    return(
        <>
            <div className="from_box" style={{color :  props.mode === 'dark'?'white':'black'}}>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor :  props.mode=== 'dark'?'#444444':'white', color :  props.mode=== 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
                {/* <textarea className="form-control" defaultValue={text} id="exampleFormControlTextarea1" rows="8"></textarea> */}
                </div>
                <button className="btn btn-primary me-2" onClick={handleUpClick}>Change to Uppercase</button>
                <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
                {/* <button className="btn btn-warning" onClick={handleColorClick}>Color Change</button> */}
                </div>

                <div className="count_box" style={{color: props.mode==='dark'?'white':'black'}}>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words used, {text.length} character used</p>
                    {/* <p>{text===""?0 : wordCount(text) } words used, {text.length} character used</p> */}
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute reader can read the data</p>
                    <h5>Text preview</h5>
                    <p>{text.length > 0 ? text:"Enter your text above textbox for view the preview here"}</p>
            </div>
        </>
    );
}