import React from 'react';
import 'antd/dist/antd.css';
import {useHistory} from 'react-router-dom';
import { editRoomPhoto } from '../../redux/actions/rooms';
import {Button} from 'antd';
import { connect } from 'react-redux';
import { notification } from 'antd';



function EditPhotoRoom({id}) {
console.log(id)
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        
     formData.set('img',event.target.img.files[0]);
     editRoomPhoto(formData, id)
      
        .then(res => { 
          
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    return (
        <div className="editPhotoProfile">
        <form action="" onSubmit={handleSubmit}>
            <input type="file"  id="imageInput"  name="img"/>
            <Button className="primaryButton" type="primary" htmlType="submit">
              Edit photo
            </Button>
              
                  
                </form>
        </div>
    )
}
const mapStateToProps = ({rooms}) =>({id:rooms?.id});
export default connect(mapStateToProps)  (EditPhotoRoom);

