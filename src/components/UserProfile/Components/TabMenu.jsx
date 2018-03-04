import React from 'react';
import {
    Nav, NavItem, NavLink 
} from 'reactstrap';

class TabMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageSubcategories: "ps1"
        }
    }
    render(){
        return (
            <Nav pills className="nav-pills-primary nav-pills-icons justify-content-center">
                <NavItem>
                    <NavLink
                        className={this.state.pageSubcategories === "ps1" ? "active":""}
                        onClick={() => this.setState({pageSubcategories: "ps1"})}
                    >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={this.state.pageSubcategories === "ps2" ? "active":""}
                        onClick={() => this.setState({pageSubcategories: "ps2"})}
                    >
                        <i className="now-ui-icons shopping_shop"></i>
                        Messages
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={this.state.pageSubcategories === "ps3" ? "active":""}
                        onClick={() => this.setState({pageSubcategories: "ps3"})}
                    >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Settings
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default TabMenu;