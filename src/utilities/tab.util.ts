export const handleKeyboardNavigation = (
  e: React.KeyboardEvent<HTMLDivElement>,
  currentIndex: number,
  totalTabs: number,
  setIndex: (index: number) => void
) => {
  if (e.key === "ArrowRight") {
    setIndex((currentIndex + 1) % totalTabs);
  } else if (e.key === "ArrowLeft") {
    setIndex((currentIndex - 1 + totalTabs) % totalTabs);
  }
};
