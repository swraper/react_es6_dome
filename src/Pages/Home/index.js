import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import APIHelper from '../../contents/APIHelper';
import timg from '../../assets/timg.gif';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    query() {
        APIHelper.register({
            name: 'piter',
            password: '123456',
            userName: 'piter',
            age: 26,
            address: '123123',
            sex: 'm',
            phone: 13200001234,
        }).then((res) => {
            console.log(res);
        });
    }
    searchName() {
        APIHelper.searchName().then((res) => {
            console.log(res);
        });
    }
    login() {
        APIHelper.Login({
            userName: 'admin',
            password: '123456'
        }).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <Page>
                <img src={timg} />
                <br />
                <span>Hello world!</span>
                <p>This is a react dome with ES6 and styled!</p>
                <p>References to components such as:</p>
                <li>
                    <a type='button' href='http://react.html.cn/docs/hello-world.html'>react</a>
                </li>
                <li>
                    <a type='button' href='http://react-guide.github.io/react-router-cn/index.html'>react-router-dom</a>
                </li>
                <li>
                    <a type='button' href='http://react.html.cn/docs/typechecking-with-proptypes.html'>prop-types</a>
                </li>
                <li>
                    <a type='button' href='https://www.styled-components.com/docs'>styled-components</a>
                </li>
                <li>
                    <a type='button' href='https://npm.taobao.org/package/whatwg-fetch'>whatwg-fetch</a>
                </li>
            </Page>
        );
    }
}
const Page = styled.div`
    text-align: center;
    margin: 50px 0;
    button {
        margin:0 10px;
    }
    img {
        width:200px;
    }
    li {
        width:300px;
        margin:auto;
        padding-left:80px;
        text-align:left;
    }
    a {
        width:200px;
    }
`;

Home.propTypes = {
    history: PropTypes.object,
};
