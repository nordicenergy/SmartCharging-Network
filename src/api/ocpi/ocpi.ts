import express from "express"
import * as bodyParser from "body-parser"
import { Server } from "http"

import { VersionsController } from "./controllers/versions.controller"
import { IOcpiBackendConfig } from "../../models/ocpi"
import { isAuthorized } from "./middleware/middleware"
import { CommandsController } from "./controllers/commands.controller"

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.text())

export const startOcpiApi = async (config: IOcpiBackendConfig): Promise<Server> => {
    app.use(
        "/backend",
        isAuthorized(config.pluggableDB),
        VersionsController.getRoutes(config),
        CommandsController.getRoutes(config.events)
    )
    return new Promise((resolve, _) => {
        const server = app.listen(3001, () => resolve(server))
    })
}

export const stopOcpiApi = async (server: Server): Promise<void> => {
    return new Promise((resolve, _) => {
        server.close(() => resolve())
    })
}
