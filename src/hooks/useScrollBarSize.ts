import { useEffect, useRef, useState } from "react";

interface DebouncedFn<F extends (...args: any[]) => void> {
  (...args: Parameters<F>): void;
  cancel: () => void;
}

const debounce = <F extends (...args: any[]) => void>(
  fn: F,
  waitFor: number
): DebouncedFn<F> => {
  let timeout: NodeJS.Timeout | null;

  const clear = () => {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const debouncedFn = (...args: Parameters<F>): void => {
    clear();

    timeout = setTimeout(() => {
      fn(...args);
    }, waitFor);
  };

  debouncedFn.cancel = () => {
    clear();
  };

  return debouncedFn;
};

export interface ScrollbarMeasurements {
  height: number;

  width: number;
}

const useScrollbarSize = (): ScrollbarMeasurements => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getElement = () => {
      if (element.current == null) {
        element.current = document.createElement("div");
        element.current.style.width = "99px";
        element.current.style.height = "99px";
        element.current.style.overflow = "scroll";
        element.current.style.position = "absolute";
        element.current.style.top = "-9999px";
        element.current.setAttribute("aria-hidden", "true");
        element.current.setAttribute("role", "presentation");
      }
      return element.current;
    };

    const updateState = () => {
      const {
        offsetHeight,
        clientHeight,
        offsetWidth,
        clientWidth,
      } = getElement();
      const scrollbarHeight = offsetHeight - clientHeight;
      const scrollbarWidth = offsetWidth - clientWidth;

      setDimensions((currentDimensions) => {
        const { height, width } = currentDimensions;
        return height !== scrollbarHeight || width !== scrollbarWidth
          ? { height: scrollbarHeight, width: scrollbarWidth }
          : currentDimensions;
      });
    };

    const handleResize = debounce(updateState, 100);

    window.addEventListener("resize", handleResize);
    document.body.appendChild(getElement());
    updateState();

    const elementToRemove = getElement();

    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(elementToRemove);
    };
  }, []);

  return dimensions;
};

export default useScrollbarSize;
