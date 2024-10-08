import React from "react";
import { Link } from "react-router-dom";
import Profile from "../ui/Profile";
import AnotherSite from "../ui/AnotherSite";

import DesignPortfolioData from "../../data/designPortfolioData.json";
import PublishingPortfolioData from "../../data/publishingPortfolioData.json";
import DesignStudyData from "../../data/designStudyData.json";
import PublishingStudyData from "../../data/publishingStudyData.json";
import EtcStudyData from "../../data/etcStudyData.json";
import ListLink from "../list/ListLink";

interface AsideProps {
  falseActive: () => void;
}

export default function Aside({falseActive}: AsideProps) {
	const DesignPortfolioCount = DesignPortfolioData.cards.length;
	const PublishingPortfolioCount = PublishingPortfolioData.cards.length;
	const DesignStudyCount = DesignStudyData.cards.length;
	const PublishingStudyCount = PublishingStudyData.cards.length;
	const EtcStudyCount = EtcStudyData.cards.length;

  return (
		<div className="aside_wrap">
			<div className="aside">
				<Profile/>
				<AnotherSite/>
				<nav className="nav">
					<Link
						to="/"
						className="resume"
					>
						RESUME
					</Link>
					<div className="nav_wrap">
						<div className="category">Portfolio</div>
						<div className="nav_list">
							
							<ListLink linkTo="/dp" title="Design" baseClass="item" count={DesignPortfolioCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M15.4565 9.67491L15.3144 9.53285C14.6661 8.90783 13.8549 8.43357 12.9235 8.18399C10.0168 7.40515 7.22541 9.05261 6.43185 12.0142C6.38901 12.1741 6.36574 12.3536 6.3285 12.805C6.17423 14.675 5.73449 16.0696 4.5286 17.4841C6.78847 18.3726 9.46572 18.9984 11.5016 18.9984C13.9702 18.9984 16.1644 17.3393 16.8126 14.9201C17.3306 12.9868 16.7513 11.018 15.4565 9.67491ZM13.2886 6.21289L18.2278 2.3713C18.6259 2.06168 19.1922 2.09694 19.5488 2.45355L22.543 5.44774C22.8997 5.80435 22.9349 6.3707 22.6253 6.76879L18.7847 11.7067C19.0778 12.895 19.0836 14.1719 18.7444 15.4377C17.8463 18.7896 14.8142 20.9984 11.5016 20.9984C8 20.9984 3.5 19.4966 1 17.9966C4.97978 14.9966 4.04722 13.1864 4.5 11.4966C5.55843 7.54646 9.34224 5.23923 13.2886 6.21289ZM16.7015 8.09149C16.7673 8.15494 16.8319 8.21952 16.8952 8.2852L18.0297 9.41972L20.5046 6.23774L18.7589 4.49198L15.5769 6.96685L16.7015 8.09149Z"/>
							<ListLink linkTo="/pp" title="Publishing" baseClass="item" count={PublishingPortfolioCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
						</div>
					</div>
					<div className="nav_wrap">
						<div className="category">Study</div>
						<div className="nav_list">
							<ListLink linkTo="/ds" title="Design" baseClass="item" count={DesignStudyCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"/>
							<ListLink linkTo="/ps" title="Publishing" baseClass="item" count={PublishingStudyCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"/>
							<ListLink linkTo="/es" title="Etc" baseClass="item" count={EtcStudyCount} onClick={falseActive} svgColor="#232323" svgWH="25px" path="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"/>
						</div>
					</div>
				</nav>
			</div>
		</div>
  );
}
