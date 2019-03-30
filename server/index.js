import app from './server'; /* eslint-disable-line consistent-return */

const appMessage = () => console.log(
  `App is running on ${GLOBALS.PORT} port`,
);

app.listen(GLOBALS.PORT, appMessage);

/* Handle /assets/ */

const devServerMessage = () => console.log(
  `Dev Server is running on ${GLOBALS.DEV_SERVER_PORT}port`,
);

async function startDevServer() {
  await import('./devServer').then(({ default: devServer }) => {
    devServer.listen(GLOBALS.DEV_SERVER_PORT, devServerMessage);
  });
}

if (
  NODE_ENV === 'development'
  && GLOBALS.DEV_SERVER_PORT
) {
  console.log('START DEV SERVER!!1!1!');
  startDevServer();
}
