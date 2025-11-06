type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab = ({ label, isActive, onClick }: TabProps) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {label}
    </button>
  );
};

export default Tab;
