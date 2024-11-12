import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correctly when listCourses is empty", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3); // Header rows + empty message
  });

  it("renders correctly with a list of courses", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(4); // Header rows + 2 courses
  });
});