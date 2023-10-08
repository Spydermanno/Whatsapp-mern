import React, { useState } from 'react';
import mockData from './mock-data.json';

function Boo() {
  const [query, setQuery] = useState("");
  
  return (
    <div class="boo"> 
      <input
        placeholder="Search your Chat"
        onChange={event => setQuery(event.target.value)}
      />
      {
        mockData.map((post, index) => (
          <div key={index}>
            <p>{post.title}</p>
            <p>{post.author}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Boo;