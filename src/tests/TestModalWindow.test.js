import React from 'react';
import { shallow } from 'enzyme';
import ModalBox from "../Components/Header/ModalBox";
import { render, fireEvent } from '@testing-library/react';

describe('ModalBox', () => {
    it('should render correctly with provided props', () => {
        const props = {
            isOpen: true,
            onClose: jest.fn(),
            children: <div>Test Modal Content</div>,
        };

        const wrapper = shallow(<ModalBox {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('calls onClose when close button is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByLabelText, getByText } = render(<ModalBox show handleClose={onCloseMock} />);

        // Find and click on the close button
        const closeButton = getByLabelText('Close');
        fireEvent.click(closeButton);

        // Verify that onClose has been called
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});