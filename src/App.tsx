import "./App.css";
import { Tabs } from "./components/Tabs/Tabs";
import type { TabItem } from "./types/tab.types";

function App() {
  const tabs: TabItem[] = [
    {
      id: 1,
      label: "Tab 1",
      content: (
        <p>
          Welcome to Tab 1. Here you will find the detailed contents and
          information related to Tab 1.
        </p>
      ),
    },
    {
      id: 2,
      label: "Tab 2",
      content: (
        <p>
          Welcome to Tab 2. Here you will find the detailed contents and
          information related to Tab 2.
        </p>
      ),
    },
    {
      id: 3,
      label: "Tab 3",
      content: (
        <p>
          Welcome to Tab 3. Here you will find the detailed contents and
          information related to Tab 3.
        </p>
      ),
    },
  ];

  return (
    <>
      <h1>Tabs</h1>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
