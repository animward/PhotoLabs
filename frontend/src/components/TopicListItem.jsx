import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

import React from "react";

const TopicListItem = () => {
  return (
    <ul className="topic-list__item">
      {sampleDataForTopicListItem.label}
    </ul>
  );
};

export default TopicListItem;
