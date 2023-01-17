import { Links, Meta } from '@remix-run/react';
import styles from './styles/index.css'

export function meta() {
  return ({
    charset: 'UTF-8',
    title: 'My remix guitar shop',
    viewport: 'width=device-width, initial-scale=1.0'
  })
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap',
      
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    


  ]
}

export default function App() {
  return(
    <Document>

      <h1>Hola</h1>
    </Document>
  );
}

function Document({ children }) {
  return(
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <Meta />
        <Links />
      </head>
      <body>
        { children }
      </body>
    </html>
  );
}
