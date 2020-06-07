import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import CreateAssessment from './CreateAssessment';

class ModalAssessment extends React.Component {
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
        <Button className="primaryButton" type="primary" onClick={this.showModal}>
          Write an assessment
        </Button>
  
        <Modal
          title="Assessment"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <CreateAssessment/> 

        </Modal>
      </div>
    );
  }
}
export default ModalAssessment;