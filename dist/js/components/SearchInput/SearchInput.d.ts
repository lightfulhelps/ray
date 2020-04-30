import * as React from 'react';
declare type Props = {
    className?: string;
    onSearch: (arg0: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) => void;
    placeholder?: string;
    value?: string;
    [key: string]: any;
};
declare const SearchInput: React.FC<Props>;
export default SearchInput;
