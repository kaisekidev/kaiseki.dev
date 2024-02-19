'use client';

import { Fragment } from 'react';
import {Highlight, Prism} from 'prism-react-renderer';

export async function initPhpLanguage() {
  (typeof global !== "undefined" ? global : window).Prism = Prism;
  // @ts-ignore
  await import("prismjs/components/prism-markup-templating");
  // @ts-ignore
  await import("prismjs/components/prism-php");
}

export async function Fence({
  children,
  language,
}: {
  children: string;
  language: string;
}) {
  await initPhpLanguage();
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={{ plain: {}, styles: [] }}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
