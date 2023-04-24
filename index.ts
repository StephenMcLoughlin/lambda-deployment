import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda"

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    // max number
    const max = 10
    const randomNumber = Math.floor(Math.random() * max)

    const response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'text/html',
        },
        "body": `Random number is ${randomNumber}`
    }
    return response
}