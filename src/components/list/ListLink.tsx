import React from "react";
import { Link } from "react-router-dom";
import { ListLinkProps } from "../../types/props";
import SvgList from "./SvgList";

export default function ListLink({ linkTo, title, baseClass, target, rel, ariaLabel, image, svgColor, path, svgWH }: ListLinkProps) {
	const linkStyle = image ? { background: `url(${image}) center center / cover` } : {};

  return (
    <li>
      <Link
        to={linkTo}
        className={baseClass}
				target={target}
				rel={rel}
				aria-label={ariaLabel}
				style={linkStyle}
      >
				{svgColor && path && svgWH && (
					<>
						<SvgList
							svgColor={svgColor}
							path={path}
							svgWH={svgWH}
						/>
					</>
        )}
        <div>{title}</div>
      </Link>
    </li>
  );
}