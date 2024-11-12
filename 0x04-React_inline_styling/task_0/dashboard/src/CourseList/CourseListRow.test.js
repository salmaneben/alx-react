import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={true} 
        textFirstCell="test1" 
        textSecondCell="test2" 
      />
    );
    const th = wrapper.find('th');
    expect(th.length).toBe(2);
    expect(th.first().text()).toBe('test1');
    expect(th.at(1).text()).toBe('test2');
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false} 
        textFirstCell="test1" 
        textSecondCell="test2" 
      />
    );
    const td = wrapper.find('td');
    expect(td.length).toBe(2);
    expect(td.first().text()).toBe('test1');
    expect(td.at(1).text()).toBe('test2');
  });

  it('applies correct background color style when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    expect(wrapper.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('applies correct background color style when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="test" />
    );
    expect(wrapper.prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});