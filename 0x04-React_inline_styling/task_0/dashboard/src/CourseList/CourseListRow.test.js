import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders with isHeader true and textSecondCell null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
    expect(wrapper.find('th').props().colSpan).toEqual(2);
  });

  it('renders with isHeader true and textSecondCell not null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Second Header" />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders with isHeader false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Data" textSecondCell="More Data" />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
    expect(wrapper.find('td')).toHaveLength(2);
  });
});