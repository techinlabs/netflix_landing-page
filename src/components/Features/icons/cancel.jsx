import React, {Component} from 'react';

import styled, {css} from 'styled-components';

// SVG icon for Each Feature
const Icon = styled.svg`
    fill: #777;
    &:hover { 
        fill: white;
    }

    ${props => props.selected && css`
        fill: white;
  `}
    &.selected {
        fill: white;
    }
`;

export default class CancelIcon extends Component {
    render() {
        return (
            <Icon viewBox="0 0 40 48" width="60px" height="49px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g>
                <path d="M29.55 18.7v-4.6c-5.2.4-4.6 2.8-4.6 2.8.3 1.7 2.35 2.35 2.35 2.35.6-.35 2.25-.55 2.25-.55zm3.7 1L33 21.3c-9.15-.3-8.7-3.75-8.7-3.75l.15 5.2c1.1 4.05 8.35 4.2 8.2 4.2l-.2 1.5 6.9-3.8-6.1-4.95zm-20.3 6.25c-.5-.5-1.3-.45-1.8.05-.45.5-.45 1.25.05 1.75s1.3.45 1.75-.05c.5-.5.5-1.25 0-1.75zm2.35-15.9L1.5 1.45V38.9l2.6 1.45 11.2 6.2v-36.5zM1.5 40.35C.4 39.85 0 39.7 0 38.9l1.5 1.45zM28.05 28.1h1.45v10.8c0 .8-.65 1.45-1.45 1.45H16.8v6.15c0 .849-.65 1.5-1.45 1.5L1.5 40.35 0 38.9V1.45C0 .65.65 0 1.5 0h26.55c.8 0 1.45.65 1.45 1.45v11.2h-1.45V1.45H4.1L15.6 8.6c.95.35 1.2.65 1.2 1.45V38.9h11.25V28.1z"></path>
                </g>
            </Icon>
        );
    }
}
