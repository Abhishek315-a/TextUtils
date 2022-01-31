import React, {useState} from 'react'


export default function Textarea(props) {
  const uprcase=()=>{
    let newText= Text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase","Success!");
  }
  const lowrcase=()=>{
    let newText= Text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase","Success!");
  }
  const sentcase=()=>{
    let newText= Text.charAt(0);
    let newlyText=newText.toUpperCase();
    let text= Text.slice(1);
    setText(newlyText+text);
    props.showalert("Converted to Sentence case","Success!");
  }
  const copytext=()=>{
   let Tex = document.getElementById("myBox");
   Tex.select();
   navigator.clipboard.writeText(Tex.value);
   props.showalert("Text copied","Success!");
  }
  const captzdcase=()=>{
    const cap = Text.split(" ");
    let ss = "";
    cap.forEach((element) => {
      ss +=
        element.replace(
          element.charAt(0),
          element.charAt(0).toUpperCase()
        ) + " ";
        setText(ss);
    });
    props.showalert("Converted to Capitalized text","Success!");
  }
  const clearall=()=>{
    setText("");
    props.showalert("Text cleared","Success!");
  }
  const textonchange=(event)=>{
    setText(event.target.value);
  }
  
  const [Text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text}  onChange={textonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={uprcase}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={lowrcase}>Covert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={sentcase}>Covert to Sentence case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={captzdcase}>Covert to Capitalized case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copytext}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearall}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p>{Text.split(" ").length-1} words and {Text.length-Text.split(" ").length+1} characters</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:"Write in the textbox to preview your text"}</p>
    </div>
    </>
  )
}
