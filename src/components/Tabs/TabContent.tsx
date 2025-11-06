import React from "react";

type TabContentProps = {
  content: React.ReactNode;
};

const TabContent = ({ content }: TabContentProps) => {
  return <div role="tabpanel">{content}</div>;
};

export default TabContent;
