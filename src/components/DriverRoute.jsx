import { Stack } from "@mui/material"
import RouteCard from "./RouteCard"

export const DriverRoute = () => {

    return (
        <div>
            <Stack spacing={1.5}>
                <RouteCard />
                <RouteCard />
                <RouteCard />
                <RouteCard />
                <RouteCard />
            </Stack>
        </div>
    )
}