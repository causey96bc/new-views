import React from 'react';
import TwitterPosts from "../components/TwitterPosts";
import ErrorBoundary from '../utils/ErrorBoundary';
const Posts = () => {
    return (
        <>
            <ErrorBoundary>
                <TwitterPosts />
            </ErrorBoundary>
        </>
    );
};
export default Posts;