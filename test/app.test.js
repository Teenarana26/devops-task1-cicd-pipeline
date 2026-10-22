const test = require('node:test');
const assert = require('node:assert');
const server = require('../app');

test('GET / returns greeting, GET /health returns ok', async () => {
  await new Promise((r) => server.listen(0, r));
  const base = `http://localhost:${server.address().port}`;

  const home = await fetch(base + '/');
  assert.strictEqual(home.status, 200);
  assert.match(await home.text(), /Hello/);

  const health = await fetch(base + '/health');
  assert.deepStrictEqual(await health.json(), { status: 'ok' });

  server.close();
});
