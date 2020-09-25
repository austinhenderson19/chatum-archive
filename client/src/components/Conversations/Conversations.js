import React from 'react';

import Conversation from './Conversation/Conversation';

const Conversations = (props) => {
  return (
    <div>
      {props.conversations.map((conversation, index) => {
        return (
          <Conversation
            id={conversation.id}
            name={conversation.name}
            img={conversation.img}
            job={conversation.job}
            setSelected={props.setSelected}
            notifications={conversation.notifications}
            active={conversation.active}
            key={conversation.id}
          />
        );
      })}
    </div>
  );
};

export default Conversations;
