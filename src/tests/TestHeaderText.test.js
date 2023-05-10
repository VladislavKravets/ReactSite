import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header';
import LanguageContext from "../Components/LanguageContext";


describe('<Header />', () => {
    it('renders navbar with logo and menu items', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('Navbar')).toHaveLength(1);
        expect(wrapper.find('NavbarBrand')).toHaveLength(1);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('Nav')).toHaveLength(1);
        expect(wrapper.find('NavLink')).toHaveLength(4);
    });

    it('renders language selector and search input', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('LanguageSelector')).toHaveLength(1);
        expect(wrapper.find('FormControl[type="text"]')).toHaveLength(1);
        expect(wrapper.find('FormControl').prop('placeholder')).toEqual('Search');
    });

    it('opens modal on login button click', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('ModalBox').prop('show')).toBe(false);
        wrapper.find('Button').at(1).simulate('click');
        expect(wrapper.find('ModalBox').prop('show')).toBe(true);
    });
});
