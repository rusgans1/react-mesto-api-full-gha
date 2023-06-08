const jwt = require('jsonwebtoken');

const YOUR_JWT = '86e9169ad92bc19b02edda92010aed188792b138d5361e9eecbb7cf14f8cd865';
const SECRET_KEY_DEV = 'dev-secret';
try {
  // eslint-disable-next-line no-unused-vars
  const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  // eslint-disable-next-line no-console
  console.log('\x1b[31m%s\x1b[0m', `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`);
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    // eslint-disable-next-line no-console
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    // eslint-disable-next-line no-console
    console.log(
      '\x1b[33m%s\x1b[0m',
      'Что-то не так',
      err,
    );
  }
}
