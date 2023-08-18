import React, {useState} from 'react'
import PropTypes from 'prop-types'
export default function Formarea1(props) {
    const[writeText, upText] = useState("")

    let addtext= (event)=>{
     upText(event.target.value);
    }

    let changeIntoUpper = ()=>{
        let newtext = writeText.toUpperCase();
        upText(newtext);
        props.showAlert("All Letter Change Into Uppercase", "success")
    }

    let changeIntoLower =()=>{
        let newtext1 = writeText.toLowerCase();
        upText(newtext1);
        props.showAlert("All Letter Change Into LowerCase", "success")

    }
   
    // function for copy the text 
    const handelforCopy =()=>{
        let text1 = document.getElementById('textBox');
        text1.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text1.value);
        props.showAlert("All Text Copy Into ClipBoard", "success")

    }
    //  function for removing space between words 
    const removeSpace =()=>{
        let rtext = writeText.split(/[ ]+/);
        upText(rtext.join(" "));
        props.showAlert("Extra Spaces Has Removed", "success")

    }

    // clear text function 
    const clearScreen =()=>{
        upText(" ")
        props.showAlert("Your Text Area has been Cleared", "success")

    }

    return (
        <>
            <div className="mb-3" style={{color : props.mode==="dark"?"white":"Black"}}>
              <h1 className='my-3'  >Type your text here....</h1>
                <div className="mb-3">
                    <textarea value= {writeText} className="form-control" onChange={addtext} id="textBox" rows="8" style={{backgroundColor : props.mode==="dark"?"#4f5461":'white', color: props.mode==="dark"?"white":"black"}}></textarea>
                </div>
                <button onClick={changeIntoUpper} className="btn btn-outline-success">UpperCase</button>
               
                <button onClick={changeIntoLower} className="btn btn-outline-success mx-2">LowerCase</button>
                <button onClick={handelforCopy} className="btn btn-outline-success mx-2">Copy</button>
                <button onClick={removeSpace} className="btn btn-outline-success mx-2">removeSpace</button>
                <button onClick={clearScreen} className="btn btn-outline-success mx-2">clearScreen</button>
                
            </div>
            <div className="container" style={{color : props.mode==="dark"?"white":"Black"}}>
                <h1 >
                    Your text Summary Here
                </h1>
                <p><b>Total Character : </b>{writeText.length}</p>
                <p><b>Total Word      : </b>{writeText.split(" ").length}</p>
                <p><b>Reading Time      : </b>{(0.008)*writeText.split(" ").length}</p>
                <h2>Text Preview</h2>
                <p><b>{writeText.length>0?writeText:"==> Yha Preview dekh skte ho bhai."}</b></p>
            </div>

        </>
    )
    }
