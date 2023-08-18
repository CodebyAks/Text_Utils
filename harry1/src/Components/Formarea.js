import React, {useState} from 'react'

export default function Formarea(props) {
    const [text, setText] = useState("Hii my name is aakashi")

    let changeHandler= (event)=> {
         setText(event.target.value)
    }

    let changeToUpper = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }
  return (
    <>

   <h1>{props.heading}</h1>
<div className="mb-3 my-3">
  <textarea className="form-control" value={text}  onChange={changeHandler} id="area" rows="8"></textarea>
</div>
<button className="btn btn-outline-success" onClick={changeToUpper}>Capitalization</button>
<button className="btn btn-outline-success m-5" onClick={changeToUpper}>Lowercase</button>
    </>
  )
}
