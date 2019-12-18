import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import TodoRow from './components/TodoList/TodoRow';

describe('renders <App/> components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has todo input form', () => {
    expect(wrapper.find(InputForm).length).toBe(1);
  });

  it('has todo list', () => {
    expect(wrapper.find(TodoList).length).toBe(1);
  });

});

describe('<App/> can add task', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a sample todo item', () => {
    expect(wrapper.find(TodoRow).length).toBe(1);
  });

  it('can add item', () => {
    wrapper.find("input[type='text']").simulate('change', { target: { value: "Clean the apartment" } })
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find(TodoRow).length).toBe(2);
    expect(wrapper.find(TodoRow).last().text()).toEqual("Clean the apartment");
  });

  it('shows that item is done', () => {

    wrapper.find("input[type='text']").simulate('change', { target: { value: "Feed the dog" } })
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find(TodoRow).length).toBe(2);
    expect(wrapper.find(TodoRow).last().text()).toEqual("Feed the dog");
    wrapper.find(TodoRow).last().find("input[type='checkbox']").simulate('change');
    wrapper.update();
    expect(wrapper.find(TodoRow).last().find("input[type='checkbox']").prop("checked")).toBe(true);
    let firstItemStyle = wrapper.find(TodoRow).first().find(".col > div").first().get(0).props.style;
    expect(firstItemStyle).toHaveProperty('textDecoration', 'none');
    let secondItemStyle = wrapper.find(TodoRow).last().find(".col > div").first().get(0).props.style;
    expect(secondItemStyle).toHaveProperty('textDecoration', 'line-through');

  });

});