export type AppDto = {statusCode: number;msg: string; isHealthy: boolean}

export type HealthCheckDto = {statusCode: number; err?: string; isHealthy: boolean}