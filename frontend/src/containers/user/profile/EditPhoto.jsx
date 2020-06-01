import React from 'react';
import 'antd/dist/antd.css';
import {useHistory} from 'react-router-dom';
import { editProfilePhoto } from '../../../redux/actions/users';
import {Button} from 'antd';
import { notification } from 'antd';



function EditPhoto(props) {
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        console.log(event.target.img.files[0])
     formData.set('img',event.target.img.files[0]);
        editProfilePhoto(formData)
      
        .then(res => { 
            notification.success({message:'Edited'})
            setTimeout(() => {
                history.push('/profile')
            }, 2000);
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    return (
        <div className="editPhotoProfile">
        <form action="" onSubmit={handleSubmit}>
            <input type="file"  id="imageInput"  name="img"/>
                <Button>  <input  type="submit" /></Button>
              
                  
                </form>
        </div>
    )
}

export default EditPhoto

