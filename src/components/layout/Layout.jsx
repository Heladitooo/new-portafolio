import React from "react";
import Header from "./Header";
import "./style/Layout.css"

class Layout extends React.Component {
    render(){
        return (
            <div className="layout">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;