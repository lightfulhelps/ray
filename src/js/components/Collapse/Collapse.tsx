import React, { useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../..';

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  label: string;
};

const Collapse: React.FC<Props> = ({ children, className, label, defaultOpen, ...other }) => {
  const [isOpen, setIsOpen] = useState(!!defaultOpen);
  const classes = classNames(className);

  const handleToggle = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div {...other} className={classes}>
      <div
        className="collapse-toggle h6 mb-0 cursor-pointer d-flex justify-content-between align-items-center"
        data-test-id="collapse-toggle"
        onClick={handleToggle}
      >
        {label} <Icon isActive theme="gray-600" name={isOpen ? 'chevronUp' : 'chevronDown'} />
      </div>
      {isOpen && (
        <div className="collapse-children" data-test-id="collapse-children">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
