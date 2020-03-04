import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    onSearch: (arg0: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) => void;
    placeholder?: string;
    value?: string;
}
declare const SearchInput: React.FC<Props>;
export default SearchInput;
