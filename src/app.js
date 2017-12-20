import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from "./actions";


const App = (props) => {
    return(
        <div>
            <h2>Redux Example</h2>
            <button onClick={() => props.fetchData()}>Load Data</button>
            <div>
                {
                    props.appData.isFetching && <p>Loading...</p>
                }
                {
                    props.appData.data.length ? (
                        props.appData.data.map((person, i) => {
                            return <div key={i} >
                                <p>Name: {person.name}</p>
                                <p>Age: {person.age}</p>
                            </div>
                        })
                    ) : null
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      appData: state.appData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)