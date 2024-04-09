import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

describe('Testing the <Notifications /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('<Notifications /> is rendered without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('<Notifications /> renders three list items', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBeTruthy();
  });
});