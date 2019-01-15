import styled from 'styled-components';
// import themes from '../style/themes/default';

const fadeIn = keyframes`
    0% {
        opacity:0
    }
    100% {
        opacity:1
    }
`;

const Mask = styled.div`
    position: fixed;
    top:  0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    animation: 0.3s ${fadeIn} ease-in-out;
    display: ${props => (props.isShow ? 'block' : 'none')};
    z-index: 999;
`;

export default Mask;
