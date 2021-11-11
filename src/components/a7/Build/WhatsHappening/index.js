import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  const tweetClickHandler = () => {
    dispatch({
      type: 'create-tweet',
      tweet: whatsHappening
    });
  }

  return (
    <>
      <img className="rounded-circle wd-avatar-image"
        src='/images/react.png'
        alt='icon' />
      <textarea className="form-control"
        value={whatsHappening}
        placeholder="What's happening?"
        onChange={(event) =>
          setWhatsHappening(event.target.value)}>
      </textarea>

      <i className="fas fa-image"></i>
      <i className="fas fa-chart-bar"></i>
      <i className="fas fa-face-smile"></i>
      <i className="fas fa-calendar"></i>

      <button className="btn btn-primary rounded-pill" onClick={tweetClickHandler}>
        Tweet
      </button>
    </>
  );
}

export default WhatsHappening;
