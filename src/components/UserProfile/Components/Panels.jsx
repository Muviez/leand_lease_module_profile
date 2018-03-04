import React from 'react';
import {
    TabContent, TabPane, Card, CardHeader, CardTitle, CardBody, Row, Col, //Nav, NavItem, NavLink,
} from 'reactstrap';

class Panels extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageSubcategories: "ps1"
        }
    }
    render(){
        return (
            <TabContent className="tab-space tab-subcategories" activeTab={this.state.pageSubcategories}>
                <TabPane tabId="ps1">
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                    <br/><br/>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions.
                </TabPane>
                <TabPane tabId="ps2">
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                    <br/><br/>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions.
                </TabPane>
                <TabPane tabId="ps3">
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                    <br/><br/>
                    Dynamically innovate resource-leveling customer service for state of the art customer service.
                </TabPane>
            </TabContent>
        );
    }
}

export default Panels;