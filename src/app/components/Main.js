import React from "react";
import {connect} from "react-redux"; // need to npm install

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.setUsername('Hank')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    },
    setUsername: (name) => {
        dispatch({
          type: "SET_NAME",
          payload: name
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
