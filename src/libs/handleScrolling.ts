export const handleScrolling = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")!.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};
