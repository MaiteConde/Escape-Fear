import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import EditPhotoRoom from './EditPhotoRoom';
import { InstagramOutlined  } from '@ant-design/icons';
import './ModalRoom.scss'

class ModalRoom extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return ( 
      <div className = "modalContainer">

image:<InstagramOutlined onClick={this.showModal}/>
        {/* <Button className="secondButton"  type="dashed" onClick={this.showModal}>
          Edit photo
        </Button>
   */}
        <Modal
          title="Photo"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <EditPhotoRoom />

        </Modal>
      </div>
    );
  }
}
export default ModalRoom;