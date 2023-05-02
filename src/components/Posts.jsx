import React from 'react';

const Posts = (props) => {
    return (
      <div>
        {props.data.map(post => (
            <ul>
                <li key={post.id}>Name: {post.firstname}, Surname: {post.lastname}, Phone: {post.phone}, Role: {post.role}, Message: {post.message}</li>
            </ul>
        ))}
      </div>
    );
  };

export default Posts;