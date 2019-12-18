import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import TodoList from '../TodoList';
import TodoRow from '../TodoRow';

describe('<TodoList/>', () => {
    let todoListRef;
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<TodoList ref={ref => todoListRef = ref} />);
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('is empty', () => {
        expect(wrapper.find(TodoRow).length).toBe(0);
    });

    it('can add two todo items', () => {

        act(() => {
            todoListRef.addItem("Buy bread");
        });
        act(() => {
            todoListRef.addItem("Feed dog");
        });
        wrapper.update();

        expect(wrapper.find(TodoRow).length).toBe(2);
        expect(wrapper.find(TodoRow).map(el => el.text())).toEqual([
            "Buy bread",
            "Feed dog"
        ]);
    });
})