import { render, fireEvent, screen } from "@testing-library/react";
import type { TabItem } from "../src/types/tab.types";
import { expect, test } from "vitest";
import { Tabs } from "../src/components/Tabs/Tabs";

const tabList: TabItem[] = [
  { label: "Tab 1", content: <p>This is Tab 1</p> },
  { label: "Tab 2", content: <p>This is Tab 2</p> },
  { label: "Tab 3", content: <p>This is Tab 3</p> },
];

test("first tab content by default", () => {
  render(<Tabs tabs={tabList} />);
  expect(screen.getByText("Tab 1")).toBeInTheDocument();
});

test("switches content when clicking a tab", () => {
  render(<Tabs tabs={tabList} />);
  fireEvent.click(screen.getByText("Tab 2"));
  expect(screen.getByText("Tab 2")).toBeInTheDocument();
});
