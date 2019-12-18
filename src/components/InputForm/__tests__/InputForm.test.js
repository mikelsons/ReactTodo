import React from 'react';
import { mount } from 'enzyme';

import InputForm from '../InputForm';

describe('<InputForm/>', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    })

    it('allows to edit input text', () => {
        wrapper = mount(<InputForm />);
        wrapper.find("input[type='text']").simulate('change', { target: { value: "Do some test" } })
        wrapper.update();
        expect(wrapper.find("input[type='text']").first().prop('value')).toEqual("Do some test");
    });

    it('cleans after submiting', done => {
        wrapper = mount(<InputForm onSubmit={() => { }} />);
        wrapper.find("input[type='text']").simulate('change', { target: { value: "Cleaning" } })
        wrapper.find("form").first().simulate('submit');
        wrapper.update();
        setTimeout(() => {
            expect(wrapper.find("input[type='text']").first().prop('value')).toEqual("");
            done();
        }, 500);
    });

    it('returns after submiting', done => {
        const addItem = (todoItemTitle) => {
            expect(todoItemTitle).toEqual("Cleaning 123");
            done();
        }
        wrapper = mount(<InputForm onSubmit={addItem} />);
        wrapper.find("input[type='text']").simulate('change', { target: { value: "Cleaning 123" } })
        wrapper.find("form").first().simulate('submit');
        wrapper.update();
    });

})