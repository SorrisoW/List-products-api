export const errorHandler = (error, _request, response, _next) => {
    const status = error?.status ?? 500

    const payload ={
        message: error?.code ?? "internal server error",
        code: error?.code ?? "INTERNAL_ERROR",
        details: error?.details ?? null
    }

    return response.status(status).json(payload)
}