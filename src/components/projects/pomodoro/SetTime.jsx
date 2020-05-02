import React, { Component } from 'react'





export default class SetTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.titleId}>
                <h3>{this.props.title}</h3>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-3">
                        <button id={this.props.incId} onClick={this.props.onInc}>
                            <i className="fa fa-arrow-up fa-2x" />up
                        </button>
                    </div>
                    <div className="col-lg-2" id={this.props.lengthId}>
                        {this.props.length}
                    </div>
                    <div className="col-lg-3">
                        <button id={this.props.decId} onClick={this.props.onDec}>
                            <i className="fa fa-arrow-down fa-2x" />down
                        </button>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
                <div></div>
            </div>
        );
    }
}