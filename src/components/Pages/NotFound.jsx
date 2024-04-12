import React from "react";
import "./Pages.css";

function NotFound() {
  return (
    <div className="notfound">
      <p>
        Stop, you've made your way here and are lost. Please return home
        immediately. But before, you go please pat the dog
      </p>
      <br />
      <p className="kaimojidog">૮ฅ・ﻌ・აฅ</p>
      <br />
      <button>Pat the Dog</button>
    </div>
  );
}

export default NotFound;
