import React from "react";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside_wrap">
        <div className="profile_wrap">
          <div className="profile">
            <img
              src="./images/profile.png"
              alt="profile"
            />
          </div>
          <div className="sitename">TYCODESIGN</div>
          <div className="nickname">2taeyoon</div>
        </div>
        <div className="another_site">
          <a
            href="https://notefolio.net/2taeyoon"
            target="_blank"
            className="notefolio"
						aria-label="NoteFolio 프로필 보기"
          ></a>
          <a
            href="https://loud.kr/m/2taeyoon"
            target="_blank"
            className="loud"
						aria-label="Loud 프로필 보기"
          ></a>
          <a
            href="https://velog.io/@2taeyoon"
            target="_blank"
            className="velog"
						aria-label="Velog 프로필 보기"
          ></a>
          <a
            href="https://github.com/2taeyoon"
            target="_blank"
            className="github"
						aria-label="Github 프로필 보기"
          ></a>
        </div>
      </div>
    </aside>
  );
}
