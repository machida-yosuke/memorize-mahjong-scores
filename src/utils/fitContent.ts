export const fitContent = (
  parent: HTMLElement | Window,
  child: HTMLElement,
  childMargin = 0,
) => {
  const childHeight = child?.offsetHeight || 0;
  const parentHeight =
    parent instanceof Window ? parent.innerHeight : parent.offsetHeight;
  const scale = Math.min(1, parentHeight / (childHeight + childMargin));
  child.style.transform = `scale(${scale})`;
};
