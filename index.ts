import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda"

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const max = 10
    const randomNumber = Math.floor(Math.random() * max)

    const response = {
        statuscode: 200,
        body: `Random number is ${randomNumber}`
    }
    return response
}