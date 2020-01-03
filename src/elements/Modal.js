import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, absolute } from 'utils';
import Icon from './Icon';
import { Card } from './Cards';

export default class Modal extends Component {
	render() {
		const { children, toggle, on } = this.props;
		return (
			<Portal>
				{on && (
					<ModalWrapper>
						<ModalCard>
							<CloseButton onClick={toggle}>
								<Icon name="close" />
							</CloseButton>
							<div>{children}</div>
						</ModalCard>
						<Background onClick={toggle} />
					</ModalWrapper>
				)}
			</Portal>
		);
	}
}

const ModalWrapper = styled.div`
	${absolute({})}
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalCard = styled(Card)`
	position: relative;
	background: white;
	border-radius: 5px;
	padding: 15px;
	min-width: 320px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	z-index: 10;
	margin-bottom: 100px;
`;

const CloseButton = styled.div`
	position: absolute;
	border: none;
	background: transparent;
	padding: 10px;
	top: 0;
	right: 0;
	${absolute({
		y: 'top',
		x: 'right'
	})}
`;

const Background = styled.div`
	${absolute({})};
	width: 100%;
	height: 100%;
	background: black;
	opacity: 0.5;
`;
