import { Handler } from 'aws-lambda'

export const handler: Handler = async () => {
  return { statusCode: 200, body: 'Hello World' }
}
