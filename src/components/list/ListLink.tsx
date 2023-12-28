import React from "react";
import { Link } from "react-router-dom";
import { ListLinkProps } from "../../types/props";

export default function ListLink({ linkTo, title, baseClass, target, rel, ariaLabel, image, svgWH }: ListLinkProps) {
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
				{svgWH && (
          <svg fill="#232323" viewBox="0 0 256 256" height={svgWH} width={svgWH} xmlns="http://www.w3.org/2000/svg">
            <path d="M230.64,25.36a32,32,0,0,0-45.26,0c-.1.1-.2.2-.29.31L130.18,86.85,121,77.64a24,24,0,0,0-33.95,0l-76.69,76.7a8,8,0,0,0,0,11.31l80,80a8,8,0,0,0,11.31,0L178.36,169a24,24,0,0,0,0-33.95l-9.21-9.2,61.18-54.91a2.91,2.91,0,0,0,.31-.3A32,32,0,0,0,230.64,25.36ZM96,228.69,79.32,212l22.34-22.35a8,8,0,0,0-11.31-11.31L68,200.68,55.32,188l22.34-22.35a8,8,0,0,0-11.31-11.31L44,176.68,27.31,160,72,115.31,140.69,184Z"></path>
          </svg>
        )}
        <div>{title}</div>
      </Link>
    </li>
  );
}
