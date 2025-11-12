import { Elysia } from 'elysia'
import { openapi } from '@elysiajs/openapi'
import { node } from '@elysiajs/node'

const app = new Elysia({ adapter: node() })
  .use(openapi())
  .get('/', () => 'Hello Elysia')
  .listen(3000)