// import React, { useState, useEffect } from 'react';
// import classNames from 'classnames';

// type Props = {
//   className?: string;
//   isBlock?: boolean;
//   render: (arg0: boolean, arg1: () => void) => React.ReactNode;
// };

// const Dropdown: React.FC<Props> = ({ className, isBlock, render, ...other }) => {
//   const node = null;

//   const [isOpen, setIsOpen] = useState(false);

//   const handleDocumentClick = (e: Event) => {
//     if (!e || (e && !e.target) || (node && node.contains(e.target as any) && node !== e.target)) {
//       return;
//     }

//     setIsOpen(false);
//   };
//   useEffect(() => {
//     document.addEventListener('click', handleDocumentClick, true);

//     return (): void => {
//       document.removeEventListener('click', handleDocumentClick, true);
//     };
//   }, []);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const classes = classNames(className, 'dropdown', isBlock ? 'd-block' : 'd-inline-block');

//   return (
//     <div
//       {...other}
//       className={classes}
//       ref={node => {
//         node = node;
//       }}
//     >
//       {render(isOpen, handleToggle)}
//     </div>
//   );
// };

// export default Dropdown;
