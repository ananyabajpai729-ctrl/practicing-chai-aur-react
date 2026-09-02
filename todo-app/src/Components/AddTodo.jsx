import React, {useState} from 'react'


function AddTodo(props) {
    const [title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank");
        }
        
        props.addTodo(title, desc);
    }
    return (
        <>
            <h3> Add Todo </h3>
            <form onSubmit = {submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title  </label>
                    <input type="text" value = {title} onChange= {(e)=> setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="desc">Todo Description  </label>
                    <input type="text" value = {desc} onChange= {(e)=> setDesc(e.target.value)} className="form-control" id="desc" placeholder="I have to..." />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </>
    )
}
export default AddTodo