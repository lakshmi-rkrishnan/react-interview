import type React from "react";

export type TabItem = {
  label: string;
  content: React.ReactNode;
};

export type TabProps = {
  tabs: TabItem[];
};
