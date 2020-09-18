import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <hr style={{ borderTop: "3px solid #833fb6", width: "50%" }} />
      <ul
        style={{
          display: "inline",
        }}
      >
        <li style={{
          display: "inline",
        }}>
          <a href="https://www.linkedin.com/in/joonas-uusn%C3%A4kki-82300a198/">
            <img
              src={
                "https://cdn.iconscout.com/icon/free/png-512/linkedin-192-739517.png"
              }
              alt="linkedin"
              style={{ height: "50px" }}
            />
          </a>
        </li>
        <li style={{
          display: "inline",
        }}>
          <a href="https://github.com/uusnakki">
            <img
              src={
                "https://www.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png"
              }
              alt="github"
              style={{ height: "50px" }}
            />
          </a>
        </li>
        <li style={{
          display: "inline",
        }}>
          <a href="https://twitter.com/uusnakki">
            <img
              src={
                "https://cdn.pixabay.com/photo/2017/11/10/05/05/twitter-2935414_1280.png"
              }
              alt="twitter"
              style={{ height: "50px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
