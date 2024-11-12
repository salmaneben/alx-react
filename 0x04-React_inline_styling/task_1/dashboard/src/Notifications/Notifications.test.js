import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Notifications", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders NotificationItem elements", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it("renders the correct text when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).props().value).toBe(
      "No new notification for now"
    );
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".notifications")).toHaveLength(0);
  });

  it("displays notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".notifications")).toHaveLength(1);
  });

  it("calls markAsRead function with the right ID argument", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    
    console.log = jest.fn();
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalledWith("Notification 1 has been marked as read");
  });
});