import React, { Component } from 'react'
import TitleHeader from '../../share/public-header/TitleHeader'
import './dashbord.css'
import FeedItem from './FeedItem'

class Dashboard extends Component  {


  cards = [
    {username: 'Billie Zhang', comment: '真是好吃'},
    {username: 'Peter Wang', comment: '不错'},
    {username: 'Peter Wang', comment: '3星'},
  ]
  render() {
    const cardList = this.cards.map((c, index) => {
      return (
        <FeedItem key={index} username={c.username} comment={c.comment} />
      )
    })
    return(
      <div className="dashboard">
        <TitleHeader title="好友更新"/>
        <div className="feed-wrap">
          {cardList}
        </div>
      </div>
    )
  }
}

export default Dashboard