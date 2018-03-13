import React from 'react';
import PropTypes from 'prop-types';

import './Tweet.css';

const Tweet = ({tweet}) => {
  return (
    <div className="Tweet">
      <img className="avatar" src={tweet.user.profile_image_url} alt="User Profile"/>
      <div>
        <div>
          <span className="h5">{tweet.user.name}</span>
          <span className="h6">{'@'+tweet.user.screen_name}</span>
        </div>
        <div>{tweet.text}</div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;