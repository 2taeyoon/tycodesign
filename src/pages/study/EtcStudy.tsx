import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";

export default function EtcStudy() {
  return (
		<>
			<CommonHelmet
				title="이모저모"
				description="TYCODESIGN의 코드 스터디 페이지입니다."
				ogTitle="그 외 스터디"
				ogDescription="TYCODESIGN의 코드 스터디 페이지입니다."
				keywords="TYCODESIGN, 코드 스터디"
			/>
			<SliderFade typingText="웹 퍼블리싱 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>2023년부터 퍼블리싱 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
			<div className="common_wrap">EtcStudy</div>
		</>
	);
}
