import { Html, Head, Main, NextScript } from 'next/document'

function setInitialColorMode() {
  try {
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const storedTheme = window.localStorage.getItem('theme');
    const hasStoredPreference = typeof storedTheme === 'string';
    if (hasStoredPreference) {
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia(preferDarkQuery).matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  } catch (error) {
    document.documentElement.classList.remove('dark');
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `(${setInitialColorMode.toString()})()` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
