import type React from "react";

export type TabItem = {
  id: number;
  label: string;
  content: React.ReactNode;
};

export type TabProps = {
  tabs: TabItem[];
};
