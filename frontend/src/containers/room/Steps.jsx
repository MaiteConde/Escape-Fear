import React, { useEffect, Fragment } from 'react'
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Steps, Button, message } from 'antd';
import './Steps.scss'
import ReservationCalendar from './Calendar'
import { InputNumber } from 'antd';
import Moment from 'react-moment';




import Room from './Room';
import { totalPrice, roomid } from '../../redux/actions/rooms';
import  CreateReservation  from './CreateReservation';



const { Step  } = Steps;

const steps = [
  
  {
    title: 'First',
    content:<Fragment>
      {/* <Room />  */}
    
      <h2>Number of players:</h2>      
    <InputNumber min={2} max={4} defaultValue={3} onChange={onChange} /> 

   
    </Fragment>
  },
  {
    title: 'Second',
    content: <Fragment>
      <h2>Select a date</h2>
    <ReservationCalendar />
</Fragment> 
    
  },
  {
    title: 'Last',
    content:<Fragment>
      {/* <h2>Reservation resume:</h2> */}
      <br/>
       <Room /> 
     
  </Fragment>
  },
];

function onChange(value) {
totalPrice(value)
}


class ReserSteps extends React.Component {
  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    roomid(id)

  }
  constructor(props) {
    
    super(props);
    this.state = {
      current: 0,
      date: this.props.reserDate
    };
   
  }
  next() {
    
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
  
    const { current } = this.state; 

  
    return (
      <div className="steps">
       
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      
        
        <div className="steps-content">{steps[current].content}</div>

              <h2>Total Price:</h2>

             {  this.props.totalP == 3 ?
             <h2>
               {this.props.totalP * 18  } €
             </h2>: ''
             }
              {  this.props.totalP == 4 ?
             <h2>
               {this.props.totalP * 15} €
             </h2>: ''
             }
              {  this.props.totalP == 2 ?
             <h2>
               {this.props.totalP * 20} €
             </h2>: ''
             }
{current  > 0?
    
      <div>
<h2>Date:</h2>
<h2><Moment format="YYYY/MM/DD">{this.props?.reserDate}</Moment></h2>
<h2>Hour:</h2>
<h2>{this.props?.hour}</h2> </div>: ''}

             
    
        
        <div className="steps-action">

        
  
          {current < steps.length - 1 && (
            <Button className="primaryButton" type="primary" onClick={() => this.next()}>
           
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
    
 
      <CreateReservation />
   
          )}
          {current > 0 && (
       
           
            <Button className="secondButton" style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
           
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({rooms}) =>({room:rooms?.roomId, totalP:rooms?.price, reserDate:rooms?.date, hour:rooms?.hour});
export default connect(mapStateToProps)  (ReserSteps);
