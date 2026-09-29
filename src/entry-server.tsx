import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { routes } from './routes';
import { SEOCollectorContext, buildHead, renderHeadToString, type SEOProps } from './utils/seo';

export const routePaths = routes.map((route) => route.path);

/** Renders one URL for the build-time prerender (scripts/prerender.mjs). */
export const render = (url: string) => {
  const collected: SEOProps[] = [];
  const html = renderToString(
    <StrictMode>
      <SEOCollectorContext.Provider value={collected}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SEOCollectorContext.Provider>
    </StrictMode>
  );

  // The page component's useSEO call is the last one rendered for this URL.
  const seo = collected[collected.length - 1];
  if (!seo) throw new Error(`No useSEO call rendered for ${url}`);
  const head = buildHead(seo);

  return { html, title: head.title, headTags: renderHeadToString(head), noindex: head.noindex };
};
