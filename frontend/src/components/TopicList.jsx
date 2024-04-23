import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, handleTopicSelect }) => {
  if (!topics || !Array.isArray(topics)) {
    return null;
  }

  const topicListContainer = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      topic={topic}
      handleTopicSelect={handleTopicSelect}
    />
  ));
  return <div className="top-nav-bar__topic-list">{topicListContainer}</div>;
};

export default TopicList;
