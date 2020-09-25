import React, { Component } from 'react';

import Search from '../../components/Search/Search';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import Conversations from '../../components/Conversations/Conversations';
import Chat from '../../components/Chat/Chat';

import classes from './Chatum.module.scss';

export default class Chatum extends Component {
  state = {
    conversations: [
      { id: 1, name: 'Leah Dummer', job: 'Umbrella Family Childcare Centre', img: '', notifications: 0 },
      { id: 2, name: 'Bret McGee', job: 'Theios Inc.', img: '', notifications: 3 },
      { id: 3, name: 'Calvin Star', job: 'Carmens Group Inc.', img: '', notifications: 0 },
      { id: 4, name: 'Marc Hamilton', job: 'JudoCloud Inc.', img: '', notifications: 0 },
      { id: 5, name: 'Sierra Henderson', job: 'Receptionist', img: '', notifications: 8 },
      { id: 6, name: 'Chelsea Dummer', job: 'Clean Corp.', img: '', notifications: 0 },
      { id: 7, name: 'Tony Stark', job: 'Stark Industries', img: '', notifications: 0 },
      { id: 8, name: 'Talon Henderson', job: 'Raptors Point Guard', img: '', notifications: 0 },
    ],
    filter: '',
    selectedConversation: {},
    messages: [
      {
        id: 1,
        from: { id: 1, name: 'Leah Dummer', job: 'Umbrella Family Childcare Centre', img: '', notifications: 0 },
        content: "Please don't forget about our dinner plans tonight.",
      },
      {
        id: 2,
        from: { id: 7, name: 'Tony Stark', job: 'Stark Industries', img: '', notifications: 0 },
        content: 'Oh yeah lol, I will be there :)',
      },
      {
        id: 3,
        from: { id: 7, name: 'Tony Stark', job: 'Stark Industries', img: '', notifications: 0 },
        content: 'Can you grab a bottle of wine?',
      },
      {
        id: 4,
        from: { id: 1, name: 'Leah Dummer', job: 'Umbrella Family Childcare Centre', img: '', notifications: 0 },
        content: 'White or red?',
      },
      {
        id: 5,
        from: 2,
        content:
          'Lets say white and if they don’t like it we can just take it back home as I’m sure they won’t really care lol. Do you know what we are doing this weekend with that couple we met at the beach?',
      },
    ],
  };

  toggleActiveClassHandler(id) {
    let newState = this.state.conversations.map((val) => {
      if (val.id === id) {
        return { ...val, notifications: 0, active: true };
      }

      return { ...val, active: false };
    });
    this.setState({ conversations: newState });
  }

  filterConversationHandler(event) {
    this.setState({ filter: event.target.value.toLowerCase() });
  }

  selectedConversationHandler(id) {
    let newState = this.state.conversations.map((val) => {
      if (val.id === id) {
        return { ...val, notifications: 0, active: true };
      }

      return { ...val, active: false };
    });
    this.setState({ conversations: newState });
    this.setState({
      selectedConversation: this.state.conversations.filter((val) => val.id === id)[0],
    });
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={`${classes.column} ${classes['column--fixed']}`}>
          <div className={classes.search}>
            <Search setFilter={this.filterConversationHandler.bind(this)} />
          </div>
          <div className={classes.conversations}>
            <Conversations
              conversations={this.state.conversations.filter(
                (val) =>
                  val.name.toLowerCase().includes(this.state.filter) ||
                  val.job.toLowerCase().includes(this.state.filter)
              )}
              setSelected={this.selectedConversationHandler.bind(this)}
            />
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.header}>
            <ChatHeader
              name={this.state.selectedConversation.name}
              img={this.state.selectedConversation.img}
              job={this.state.selectedConversation.job}
            />
          </div>
          <div className={classes.chat}>
            <Chat messages={this.state.messages} />
          </div>
        </div>
      </div>
    );
  }
}
