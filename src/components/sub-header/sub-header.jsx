import React, { Component, Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Actions
import { showAnonymous, showSignIn } from 'actions/ui';

import SVG from '../../hoc/cached-svg'
import LocationIcon from '../../images/blue-location-icon.svg'


//Styled Components
const SubHeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20px;
margin-bottom: 20px;
`;
const DonorsContainer = styled.div`
margin-top: 50px;
margin-left:150px;
width: 400px;
display: flex;
justify-content: flex-end;
align-items: center;
`;
const SearchContainer = styled.div`
margin-top: 53px;
width: calc(100% - 200px);
display: flex;
justify-content: flex-start;
align-items: center;
`;
const Donors = styled.div`
margin: 5px;
padding: 3px;
cursor: pointer;
font-weight: bold;
user-select: none;
font-size: 16px;
flex-wrap: nowrap;
border-bottom: ${({ selected }) => (selected ? '1px solid #0057B8' : '1px solid transparent')};
`;

class SubHeader extends PureComponent {
    state = {
        selected: true,
    }
    handleAnonymousClick = () => {
        this.props.showAnonymous();
        this.setState({ selected: true })
    }
    handleDonorClick = () => {
        this.props.showSignIn();
        this.setState({ selected: false })
    }
    render() {
        const { selected } = this.state;

        return (
            <SubHeaderContainer>
                <DonorsContainer>
                    <Donors selected={selected} onClick={this.handleAnonymousClick}>Give Anonymously</Donors>
                    <div style={{ userSelect: 'none', color: '#C0C0C0', fontSize: '16px' }}>or</div>
                    <Donors selected={!selected} onClick={this.handleDonorClick}>Sign In</Donors>
                </DonorsContainer>
                <SearchContainer>
                    <div style={{ userSelect: 'none', color: '#C0C0C0', fontSize: '16px', marginRight: '5px' }}>|</div>
                    <SVG style={{ marginTop: '3px' }} src={LocationIcon} />
                    <span style={{ cursor: 'pointer', color: '#C0C0C0' }}>Make-A-Wish Greater Los Angeles</span>
                </SearchContainer >
            </SubHeaderContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    showAnonymous: state => dispatch(showAnonymous(state)),
    showSignIn: state => dispatch(showSignIn(state))
});

export default connect(null, mapDispatchToProps)(SubHeader);