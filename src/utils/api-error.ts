import ResponseError from "./response-error";
import StatusCode from "./status-code";

export default class ApiError extends Error {
    static badRequest(message: string = "Invalid request"): ResponseError {
        return new ResponseError(message, StatusCode.BAD_REQUEST);
    }

    static internalServerError(message: string = "Internal server error"): ResponseError {
        return new ResponseError(message, StatusCode.INTERNAL_SERVER_ERROR);
    }

    static unauthorized(message: string = "Your not authorized to do this action"): ResponseError {
        return new ResponseError(message, StatusCode.UNAUTHORIZED);
    }

    static forbidden(message: string = "You do not have priviliges to perform this action"): ResponseError {
        return new ResponseError(message, StatusCode.FORBIDDEN);
    }

    static notFound(message: string = "URL not found"): ResponseError {
        return new ResponseError(message, StatusCode.NOT_FOUND);
    }

    static from(error: Error): ResponseError {
        const newError: ResponseError = error as ResponseError;
        newError.status = newError.status || StatusCode.INTERNAL_SERVER_ERROR;
        return newError;
    }
}
