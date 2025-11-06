import React, { useState } from "react";
import { handleKeyboardNavigation } from "../../utilities/tab.util";
import Tab from "./Tab";
import TabContent from "./TabContent";
import type { TabItem } from "../../types/tab.types";

export const Tabs = ({ tabs }: { tabs: TabItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    handleKeyboardNavigation(e, activeIndex, tabs.length, setActiveIndex);
  };
  return (
    <div>
      <div role="tablist" onKeyDown={onKeyDown} className="tablist">
        {tabs.map(
          (
            tab: { id: number; label: string; content: React.ReactNode },
            index: number
          ) => (
            <Tab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          )
        )}
      </div>
      <TabContent content={tabs[activeIndex].content} />
    </div>
  );
};
