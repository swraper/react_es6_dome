import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){

    }

    render(){
        return (
            <Page>
                <span>Hello world!</span>
                <p>This is a react dome with ES6 and styled!</p>
            </Page>
        );
    }
}
const Page = styled.div`
    text-align: center;
    margin: 50px 0;
`;

Home.propTypes = {
    history: PropTypes.object,
};
