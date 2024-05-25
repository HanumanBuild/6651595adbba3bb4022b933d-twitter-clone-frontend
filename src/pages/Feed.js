import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TWITTER_CLONE_BACKEND_URL}/api/tweets`);
        setTweets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  const handleTweetSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${process.env.REACT_APP_TWITTER_CLONE_BACKEND_URL}/api/tweets`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTweets([response.data, ...tweets]);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Feed</h1>
      <form onSubmit={handleTweetSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            What's happening?
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Tweet
        </button>
      </form>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet._id} className="border-b border-gray-200 py-4">
            <p className="text-gray-700">{tweet.content}</p>
            <p className="text-gray-500 text-sm">by {tweet.author.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;