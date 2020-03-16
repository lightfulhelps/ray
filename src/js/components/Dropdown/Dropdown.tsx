import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  isBlock?: boolean;
  render: (arg0: boolean, arg1: () => void) => React.ReactNode;
};

const Dropdown: React.FC<Props> = ({ className, isBlock, render, ...other }) => {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDocumentClick = (e: Event) => {
    console.log('e.target :', e.target);
    if (
      !e ||
      (e && !e.target)
        ||
        (node && node?.current.contains(e.target) && node.current !== e.target)
    ) {
      return;
    }

    setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, true);

    return (): void => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const classes = classNames(className, 'dropdown', isBlock ? 'd-block' : 'd-inline-block');

  return (
    <div {...other} className={classes} ref={node}>
      {render(isOpen, handleToggle)}
    </div>
  );
};

export default Dropdown;
