import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { getAllAssessments } from '../../redux/actions/assessments'
import { Rate } from 'antd';


 const Assessments = ({assessments}) => {
    useEffect(() => {
        getAllAssessments()
     }, [])

    return (
        <div>
            {assessments.map((assessment => {
                return <div>
                    {assessment?.assessment}
                    <Rate disabled value = {assessment?.points}/>
                </div>
            }))}
        </div>
    )
}

const mapStateToProps = ({assessments}) =>({assessments:assessments?.assessments});
export default connect(mapStateToProps)  (Assessments);