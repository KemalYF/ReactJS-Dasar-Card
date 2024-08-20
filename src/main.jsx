import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import "./index.css";
import "./App.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com/kmalxx69",
  },
  {
    icon: "fa-twitter",
    href: "https://twitter.com/kmal",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/kmalv13",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/kemalyf",
  },
  {
    icon: "fa-github",
    href: "https://github.com/kemalyf",
  },
];

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identify />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButtons({ icon, link }) {
  return (
    <div>
      <button onClick={() => window.open(link, "_blank")}>
        <i className={`fa ${icon}`}></i>
      </button>
    </div>
  );
}

function Header() {
  const middleIndex = Math.ceil(socialMedia.length / 2);
  const firstHalf = socialMedia.slice(0, middleIndex);
  const secondHalf = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {firstHalf.map((data, index) => (
          <SocialButtons key={index} icon={data.icon} link={data.href} />
        ))}

        {/* <SocialButtons icon="fa-facebook" />
        <SocialButtons icon="fa-twitter" />
        <SocialButtons icon="fa-instagram" /> */}
      </div>
      <div className="social-buttons right">
        {secondHalf.map((data, index) => (
          <SocialButtons key={index} icon={data.icon} link={data.href} />
        ))}
        {/* <SocialButtons icon="fa-linkedin" />
        <SocialButtons icon="fa-github" /> */}
      </div>
    </>
  );
}

function Identify() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <h1 className="name">John Doe</h1>
      </div>
      <div className="title">Manager</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        malesuada magna. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="HTML" />
      <Badge text="CSS" />
      <Badge text="JS" />
      <Badge text="React" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
