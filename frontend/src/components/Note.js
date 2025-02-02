import { useState } from "react"
import { api, errorMessage } from '../Api';
function Note({ id, title, body, isArchived, fetchNotes,setAlert }) {

    const [edit, setEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editBody, setEditBody] = useState(body);
     const handleDelete = () => {
        api.delete('/' + id).catch(error =>  setAlert(error.response?.data || errorMessage)).then(() => fetchNotes());
    }

    const handleEdit = () => {
        if (edit) {
            api.put('/' + id,
                {
                    title: editTitle,
                    body: editBody,
                    isArchived: isArchived
                })
                .then(()=> setEdit(!edit))                
                .catch(error =>  setAlert(error.response?.data || errorMessage))
                .then(() => fetchNotes());
           
        } else {
            setEdit(!edit);
        }
    }

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'title') {
            setEditTitle(value);
        } else {
            setEditBody(value);
        }
    }

    const handleArchived = () => {
            api.patch('/' + id)            
            .then(() => setAlert(`Note ${id} ${isArchived ? "restored from archive" : "moved to archive."}`))
            .then(console.log(isArchived))
            .catch(error => setAlert(error.response?.data || errorMessage))
            .then(() => fetchNotes());            
    }



    return (
        <div className="card m-2" style={{ width: '18rem', height: '12rem' }}>

            <div className="card-body position-relative"  >
                <button onClick={() => handleDelete()} type="button" className="btn-close position-absolute " style={{ top: '11%', right: '7%' }} aria-label="Close" ></button>

                <input disabled={!edit} name='title' value={editTitle} onChange={handleOnChange} placeholder={"Note " + id} style={{ height: '20%' }} className="fw-bold mb-2 border-0  form-control "></input>
                <textarea disabled={!edit} name='body' value={editBody} onChange={handleOnChange} placeholder='Write new note...' style={{ height: '70%', resize: 'none' }} className="  border-0  form-control "  ></textarea>
                <div style={{ bottom: '5%', right: '5%' }} className="position-absolute">
                    <button onClick={() => handleArchived()}
                        className=" btn btn-primary  btn-sm rounded-0 rounded-start " >
                        <i className=" bi bi-archive-fill  "></i> {isArchived ? "Unarchive" : "Archive"}
                    </button>

                    <button onClick={() => handleEdit()}
                        className=" btn btn-primary btn-sm rounded-0 rounded-end">
                        <i className="bi bi-pencil-fill  "></i>
                    </button>
                </div>
            </div>
        </div>
    )



}

export default Note;