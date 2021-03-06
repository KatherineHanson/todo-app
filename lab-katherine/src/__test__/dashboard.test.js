import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Dashboard from '../component/dashboard'

global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
}

describe('Dashboard', () => {
  test('inital state is correct', () => {
    let wrapper = mount(<Dashboard />)
    expect(wrapper.state('notes')).toEqual([])
  })
})
