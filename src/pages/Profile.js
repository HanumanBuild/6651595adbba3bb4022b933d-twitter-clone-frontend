import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_TWITTER_CLONE_BACKEND_URL}/api/users/${username}`);
        setUser(response.data);
        setTweets(response.data.tweets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{user.username}'s Profile</h1>
      <h2 className="text-2xl font-bold mb-4">Tweets</h2>
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

export default Profile;
