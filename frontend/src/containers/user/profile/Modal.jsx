import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import EditProfilePhoto  from './EditPhoto';

class ModalPhoto extends React.Component {
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
      <div>
        <Button className="secondButton"  type="dashed" onClick={this.showModal}>
          Edit photo
        </Button>
  
        <Modal
          title="Photo"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <EditProfilePhoto/>

        </Modal>
      </div>
    );
  }
}
export default ModalPhoto;