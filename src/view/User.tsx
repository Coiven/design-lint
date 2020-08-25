import * as React from 'react';
import './User.scss';

const User: React.FC = () => {
  return (
    <div className="user-item">
      <div className="user-item-area">
        <div className="img">
          <img src="" alt=""/>
        </div>
        <div className="content">
          <h1></h1>
          <h2></h2>
          <p></p>
        </div>
      </div>
      <i className="after-mask" />
    </div>
  )
}

export default User;