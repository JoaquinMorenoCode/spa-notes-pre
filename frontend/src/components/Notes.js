import { useState, useEffect } from 'react';
import { api, errorMessage } from '../Api';
import Note from './Note';

function Notes() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [alert, setAlert] = useState('');
    const [showArchived, setShowArchived] = useState(false);
    useEffect(() => {
        fetchNotes(); 
    }, [showArchived]); 



    const fetchNotes =  async () => {
        api.get('', {
                params: {
                    archived: showArchived
                }
            })
            .then((res)=> setNotes(res.data))
            .catch(error => setAlert(error.response?.data ||errorMessage))          
       
    }

    const clearState = () => {
        setTitle('');
        setBody('');
        setAlert('');
    }

    const saveNote = () => {
        
            api.post('/create',
                {
                    title: title,
                    body: body
                })
                .then(() => clearState())
                .then(() => fetchNotes())
                .catch(error => setAlert(error.response?.data || errorMessage))
                
    }

    const createNote = (event) => {
        event.preventDefault();
        saveNote();       
    }

    const renderAlert = () => {

        if (alert) {
            return (
                <div className="alert alert-warning alert-dismissible fade show  position-absolute w-100 top-0 start-0 text-center " role="alert">
                    {alert}
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setAlert("")}></button>
                </div>
            )
        }
        return (<></>)
    }

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'title') {
            setTitle(value);
        } else {
            setBody(value);
        }
    }


    const renderNotes = () => {
        return (
            <div className='d-flex flex-wrap  '>
                <div className=" card m-2" style={{ width: '18rem', height: '12rem' }}>
                    <form className="card-body position-relative" onSubmit={createNote}>
                        <input name='title' value={title} onChange={handleOnChange} placeholder='New Note...' style={{ height: '20%' }} className="fw-bold mb-2 border-0  form-control "></input>
                        <textarea name='body' onChange={handleOnChange} value={body} placeholder='Write new note...' style={{ height: '70%', resize: 'none' }} className="  border-0  form-control "  ></textarea>
                        <button style={{ bottom: '5%', right: '5%' }}
                            className="position-absolute  btn btn-primary"
                            type='submit'
                        ><i className="bi bi-plus-circle-fill"></i></button>

                    </form>
                </div>

                {notes.map((note) =>
                    <Note
                        title={note.title}
                        body={note.body}
                        key={note.id}
                        id={note.id}
                        isArchived={note.isArchived}
                        fetchNotes={fetchNotes}
                        setAlert={setAlert}
                    />
                )}

            </div>

        )
    }

    
    return (
        <div className='container position-relative'>
            {renderAlert()}

            <div  style={{paddingTop: "4rem"}} >
                <div className='d-flex flex-column align-items-start'>
                    <h1>Notes</h1>
                    <div className="form-check form-switch">
                        <input onChange={() => setShowArchived(!showArchived)} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label">Show Archived Notes</label>
                    </div>

                </div>

            </div>

            {renderNotes()}
            
        </div>

    )


}

export default Notes;