import "./App.css";
import { Tabs } from "./components/Tabs/Tabs";
import type { TabItem } from "./types/tab.types";

function App() {
  const tabs: TabItem[] = [
    { label: "Tab 1", content: <p>Tab 1</p> },
    { label: "Tab 2", content: <p>Tab 2</p> },
    { label: "Tab 3", content: <p>Tab 3</p> },
  ];

  return (
    <>
      <h1>Tabs</h1>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
