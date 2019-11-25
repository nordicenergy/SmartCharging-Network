import { IOcpiBackendConfig } from "../../src/models/ocpi";
import { OcpiTestDB } from "./ocpi-db";

export const ocpiTestConfig: IOcpiBackendConfig = {
    registration: {
        versionsURL: "https://qa.backoffice.net/ocpi/versions",
        tokenA: "1234567890"
    },
    publicURL: "http://localhost:3001",
    party_id: "NL",
    country_code: "NKL",
    business_details: {
        name: "NKL (DRIIVZ)"
    },
    pluggableDB: new OcpiTestDB()
}