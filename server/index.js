import app from './server'; /* eslint-disable-line consistent-return */

const appMessage = () => console.log(
  `App is running on ${GLOBALS.PORT} port`,
);

app.listen(GLOBALS.PORT, appMessage);

/* Handle /assets/ */

async function startDevServer() {
  await import('./devServer').then(({ default: devServer }) => {
    (devServer || {}).listen(GLOBALS.DEV_SERVER_PORT);
  });
}

if (
  NODE_ENV === 'development'
  && GLOBALS.DEV_SERVER_PORT
) {
  startDevServer();
}
