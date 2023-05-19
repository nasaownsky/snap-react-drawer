import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import useOnClickOutside from "use-onclickoutside";

import styles from "./Drawer.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size?: number | string;
  overlayClassName?: string;
  bodyClassName?: string;
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  enableOverlay?: boolean;
  duration?: number;
  position?: "left" | "right" | "top" | "bottom";
};

const Drawer: React.FC<Props> = ({
  isOpen,
  closeButton = true,
  closeOnClickOutside = true,
  enableOverlay = true,
  overlayClassName,
  bodyClassName,
  size,
  position = "left",
  duration = 300,
  onClose,
  children,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, closeOnClickOutside && onClose);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (isOpen) {
      setTimeout(() => setIsTransitioning(true), 0);
    } else if (!isOpen) {
      setTimeout(() => setIsTransitioning(false), duration);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={clsx(
        position === "left" && styles.drawer__left,
        position === "right" && styles.drawer__right,
        position === "top" && styles.drawer__top,
        position === "bottom" && styles.drawer__bottom
      )}
    >
      <div
        className={clsx(
          styles.drawer__overlay,
          isTransitioning &&
            isOpen &&
            enableOverlay &&
            styles.drawer__overlay_open,
          overlayClassName && overlayClassName
        )}
        style={{
          transition: `opacity ${duration}ms ease, visibility ${duration}ms ease`,
        }}
      />
      <div
        className={clsx(
          styles.drawer__wrapper,
          isTransitioning && isOpen && styles.drawer__wrapper_open
        )}
        aria-hidden={isOpen ? "false" : "true"}
        aria-label="drawer"
        tabIndex={-1}
        role="dialog"
        style={{ transition: `transform ${duration}ms ease` }}
      >
        <div
          className={clsx(styles.drawer__body, bodyClassName && bodyClassName)}
          style={{
            width: (position === "left" || position === "right") && size,
            height: (position === "top" || position === "bottom") && size,
          }}
          ref={ref}
        >
          {closeButton && (
            <button
              type="button"
              className={styles.drawer__closeButton}
              data-dismiss="drawer"
              aria-label="close"
              onClick={onClose}
            />
          )}
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Drawer;
