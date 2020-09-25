import React from 'react';

import Message from './Message/Message';

const Chat = (props) => {
  return props.messages.map((val) => <Message content={val.content} from={val.from} id={val.id} />);
};

export default Chat;
