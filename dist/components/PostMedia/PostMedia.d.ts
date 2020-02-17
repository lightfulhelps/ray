import React from 'react';
declare type MediaType = {
    type: string;
    url: string;
};
declare type Props = {
    className?: string;
    media: MediaType[];
};
declare const PostMedia: React.FC<Props>;
export default PostMedia;
