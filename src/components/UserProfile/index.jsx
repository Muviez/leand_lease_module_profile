import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';
// import axios from 'axios';
import { connect } from 'react-redux';

import CardAuthor  from './Components/CardAuthor.jsx';
import CardSocials from './Components/CardSocials.jsx';
import EditForm from './Components/EditForm.jsx';
import Button from './Components/CustomButton.jsx';
import { ChangeProfile } from '../../actions/user.js';

// import '../../../public/assets/img/bg5.jpg';
// import '../../../public/assets/img/mike.jpg';

const User = (props) => {

    const ChangeProfFunc = () => {
        console.log(props.upProf)
        props.ChngProf();
    }

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <Card>
                            <CardHeader>
                                {props.upProf && <h5 className="title">Profile</h5>}
                                {!props.upProf && <h5 className="title">Edit Profile</h5>}
                            </CardHeader>
                            <CardBody>
                                {console.log(props.upProf)}
                                {props.upProf && <EditForm />}
                            </CardBody>
                        </Card>
                    </div>
                    <Col md={3}  xs={12}>
                        <Card className="card-user">
                            <div className="image">
                                <img src="" alt="..."/>
                            </div>
                            <CardBody>
                                <CardAuthor
                                    avatar=""
                                    title="Mike Andrew"
                                    description="michael23"
                                />
                                <p className="description text-center">
                                    "Lamborghini Mercy <br/>
                                    Your chick she so thirsty <br/>
                                    I'm in that two seat Lambo"
                                </p>
                            </CardBody>
                            <Button
                                // bsStyle="info"
                                // pullRight
                                fill
                                type="button"
                                onClick={ChangeProfFunc}
                            >
                                Update Profile
                            </Button>
                        </Card>
                    </Col>
                </div>
            </div>
        </div>
    );

}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile
    }
};

function mapDispatchToProps(dispatch) {
    return {
        ChngProf: () => {
            dispatch(ChangeProfile());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);