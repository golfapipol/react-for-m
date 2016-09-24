import React from 'react'
import {shallow} from 'enzyme';
import Counter from './Counter'

describe('Counter', () => {
  it('renders button +', () => {
    let wrapper = shallow(<Counter />);
    let expectedButton = (<button>+</button>)
    expect(wrapper.containsMatchingElement(expectedButton)).toEqual(true);
  })

  it('renders button -', () => {
    let wrapper = shallow(<Counter />);
    let expectedButton = (<button>-</button>)
    expect(wrapper.containsMatchingElement(expectedButton)).toEqual(true);
  })
})