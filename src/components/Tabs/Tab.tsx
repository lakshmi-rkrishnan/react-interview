type TabProps = {
  id: number;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab = ({ id, label, isActive, onClick }: TabProps) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={isActive ? "tab tab-active" : "tab"}
      data-testid={`tab-${id}`}
    >
      {label}
    </button>
  );
};

export default Tab;
