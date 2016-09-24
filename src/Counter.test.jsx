import React from 'react'
import {shallow} from 'enzyme';
import Counter from './Counter'
import CounterStore from './CounterStore'

describe('Counter', () => {
  let counterStore, wrapper;
  beforeEach(() => {
    counterStore = new CounterStore();
    wrapper = shallow(<Counter counterStore={counterStore}/>);
    
  })

  it('renders button +', () => {
    let expectedButton = (<button>+</button>)
    expect(wrapper.containsMatchingElement(expectedButton)).toEqual(true);
  })

  it('renders numbers', () => {
    let count = (<span>{0}</span>)
    expect(wrapper.containsMatchingElement(count)).toEqual(true);
  })

  it('renders button -', () => {
    let expectedButton = (<button>-</button>)
    expect(wrapper.containsMatchingElement(expectedButton)).toEqual(true);
  })

  it('increase count 1 when button + clicked', () => {
    let increaseButton = wrapper.find('button.increase')

    increaseButton.simulate('click');

    let expectNumber = "1"
    expect(wrapper.find('span').text()).toEqual(expectNumber);
  })

  it('decrease count 1 when button - clicked', () => {
    let decreaseButton = wrapper.find('button.decrease')

    decreaseButton.simulate('click');

    let expectNumber = "-1"
    expect(wrapper.find('span').text()).toEqual(expectNumber);
  })
})