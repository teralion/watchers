import allowedFiles from '../utils/allowedFiles';

export default async function protector(ctx, next) {
  if (!allowedFiles.includes(ctx.filename)) {
    // TODO: implement redirection
    /* eslint-disable-next-line no-console */
    console.log(`${ctx.filename} must not be allowed`);
  }

  await next();
}
