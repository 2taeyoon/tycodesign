import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const Home = lazy(() => import("./home/Home"));
const Blog = lazy(() => import("./blog/Blog"));
const CodePortfolio = lazy(() => import("./portfolio/CodePortfolio"));
const CodePrortfolioContent = lazy(() => import("./portfolio/CodePrortfolioContent"));
const DesignPortfolio = lazy(() => import("./portfolio/DesignPortfolio"));
const DesignPortfolioContent = lazy(() => import("./portfolio/DesignPortfolioContent"));
const CodeStudy = lazy(() => import("./study/CodeStudy"));
const CodeStudyContent = lazy(() => import("./study/CodeStudyContent"));
const DesignStudy = lazy(() => import("./study/DesignStudy"));
const DesignStudyContent = lazy(() => import("./study/DesignStudyContent"));
const NotFound = lazy(() => import("./NotFound"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
	{ path: "/codeportfolio", element: <CodePortfolio /> },
	{ path: '/codeportfolio/:id', element: <CodePrortfolioContent/> },
	{ path: "/designportfolio", element: <DesignPortfolio /> },
	{ path: '/designportfolio/:id', element: <DesignPortfolioContent/> },
	{ path: "/codestudy", element: <CodeStudy /> },
	{ path: "/codestudy/:id", element: <CodeStudyContent /> },
	{ path: "/designstudy", element: <DesignStudy /> },
	{ path: "/designstudy:id", element: <DesignStudyContent /> }
];

const RouteApp = () => {
  return (
    <div className="RouteApp">
      <Suspense fallback={<div>Loading...</div> /* 로딩 이미지 */}>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            );
          })}
					<Route path='*' element={ <NotFound/> }/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouteApp;
