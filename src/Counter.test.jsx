import React from 'react'
import {shallow} from 'enzyme';
import Counter from './Counter'

describe('Counter', () => {
  it('renders button +', () => {
    let wrapper = shallow(<Counter />);
    let expectedButton = (<button>+</button>)
    expect(wrapper.containsMatchingElement(expectedButton)).toEqual(true);
  })

  it('renders numbers', () => {
    let wrapper = shallow(<Counter />);
    let count = (<span>{0}</span>)
    expect(wrapper.containsMatchingElement(count)).toEqual(true);
  })

  it('renders button -', () => {
    let wrapper = shallow(<Counter />);
    let expectedButton = (<button>-</button>)
    expect(wrapper.containsMatchingElement(expectedButton)).toEqual(true);
  })

  it('increase count 1 when button + clicked', () => {
    let wrapper = shallow(<Counter />);
    let increaseButton = wrapper.find('button.increase')

    increaseButton.simulate('click');

    let expectNumber = "1"
    expect(wrapper.find('span').text()).toEqual(expectNumber);
  })

  it('decrease count 1 when button - clicked', () => {
    let wrapper = shallow(<Counter />);
    let decreaseButton = wrapper.find('button.decrease')

    decreaseButton.simulate('click');

    let expectNumber = "-1"
    expect(wrapper.find('span').text()).toEqual(expectNumber);
  })
})