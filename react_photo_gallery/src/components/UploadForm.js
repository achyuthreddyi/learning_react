import React , {useState} from 'react'
import Progressbar from './Progressbar';

function UploadForm() {

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ['image/png','image/jpeg']

    const changeHandler = (e) =>{
        const selected = e.target.files[0]
        
        if(selected && types.includes(selected.type)){
            setFile(selected)
        }else{
            setFile (null);
            setError('Please select an image file ( jpeg /png)')
        }
    }


    return (
        <div>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span className="pos_of">+</span>
            </label>
            <div className="output">
                {error && <div className="error"> {error} </div>}
                {file && <div> {file.name} </div>}
                { file && <Progressbar file = {file} setFile={setFile}/>}
            </div>
        </div>
    )
}

export default UploadForm
