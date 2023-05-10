import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // import jest-dom library
import {render, screen} from '@testing-library/react';
import {configure, shallow} from 'enzyme';
import ModalBox from '../Components/Header/ModalBox';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ModalBox Valid', () => {
  it('validates email input fields', () => {
    // Рендерим компонент
    render(<ModalBox show={true} />);``

    // Получаем элементы input и кнопки
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByText('Submit');

    // Вводим некорректный email
    userEvent.type(emailInput, 'invalid-email');
    userEvent.click(submitButton);

    // Проверяем, что элемент с ошибкой отображается на странице
    const emailError = screen.queryByText('Некоректний email');
    expect(emailError).toBeInTheDocument();
  });

  it('validates password input fields', () => {
    // Рендерим компонент
    render(<ModalBox show={true} />);

    // Получаем элементы input и кнопки
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Submit');

    // Вводим некорректный пароль
    userEvent.type(passwordInput, 'we');
    userEvent.click(submitButton);

    // Проверяем, что элемент с ошибкой отображается на странице
    const passwordError = screen.queryByText('Пароль повинен мати не менше 3 і не більше 8 символів');
    expect(passwordError).toBeInTheDocument();
  });

  it('renders ModalBox component', () => {
    shallow(<ModalBox />);
  });

  it('updates email state when email input is changed', () => {
    const wrapper = shallow(<ModalBox />);
    const emailInput = wrapper.find('[name="email"]');
    emailInput.simulate('change', {target: {value: 'test@example.com'}});
    expect(wrapper.find('[name="email"]').prop('value')).toEqual('test@example.com');
  });

  it('updates password state when password input is changed', () => {
    const wrapper = shallow(<ModalBox />);
    const passwordInput = wrapper.find('[name="password"]');
    passwordInput.simulate('change', { target: { value: 'password123' } });
    expect(wrapper.find('[name="password"]').prop('value')).toEqual('password123');
  });
});