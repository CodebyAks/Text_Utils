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
        document.getSelection().removeAllRanges();
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
   let remText = writeText.replace(/\s/g, "");
   let length = remText.length;

    return (
        <>
        <div className="container">

            <div className="mb-3" style={{color : props.mode==="dark"?"white":"Black"}}>
              <h1 className='my-3'  >Type your text here....</h1>
                <div className="mb-3">
                    <textarea value= {writeText} className="form-control" onChange={addtext} id="textBox" rows="8" style={{backgroundColor : props.mode==="dark"?"#4f5461":'white', color: props.mode==="dark"?"white":"black"}}></textarea>
                </div>
                <button disabled ={writeText.length===0} onClick={changeIntoUpper} className="btn btn-outline-success">UpperCase</button>
               
                <button disabled ={writeText.length===0} onClick={changeIntoLower} className="btn btn-outline-success mx-2 my-2">LowerCase</button>
                <button disabled ={writeText.length===0} onClick={handelforCopy} className="btn btn-outline-success mx-2 my-2">Copy</button>
                <button disabled ={writeText.length===0} onClick={removeSpace} className="btn btn-outline-success mx-2 my-2">removeSpace</button>
                <button disabled ={writeText.length===0} onClick={clearScreen} className="btn btn-outline-success mx-2 my-2">clearScreen</button>
                
            </div>
            <div className="container" style={{color : props.mode==="dark"?"white":"Black"}}>
                <h1 >
                    Your text Summary Here
                </h1>
                <p><b>Total Character : </b>{ length}</p>
                <p><b>Total Word      : </b>{writeText.split(" ").filter((ele)=>{return ele.length!==0}).length}</p>
                <p><b>Reading Time      : </b>{(0.008)*writeText.split(" ").length}</p>
                <h2>Text Preview</h2>
                <p><b>{writeText.length>0?writeText:"==> Yha Preview dekh skte ho bhai."}</b></p>
            </div>
        </div>

        </>
    )
    }
