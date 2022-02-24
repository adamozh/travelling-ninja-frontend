import { Stack } from "@mui/material"
import RouteCard from "./RouteCard"

export const DriverRoute = () => {

    const a = {
        address: "934 TAMPINES STREET 91, 12-11 S520934",
        name: "Daisuke Nakamura",
        id: "NLSGD23318057",
        timeslot: "9AM-10PM"
    }
    const b = {
        address: "915 TAMPINES STREET 91, 04-43 S520915",
        name: "Xue Chun",
        id: "NLSGD23483368",
        timeslot: "9AM-10PM"
    }
    const c = {
        address: "934 TAMPINES STREET 91, 13-35 S520934",
        name: "Kor Johnlim",
        id: "NLXSG20522184",
        timeslot: "9AM-10PM"
    }
    const d = {
        address: "937 TAMPINES STREET 93, 07-32 S520934",
        name: "Marvie B",
        id: "NLSGCN00675585",
        timeslot: "9AM-10PM"
    }
    const e = {
        address: "934 TAMPINES STREET 91, 05-25 S520934",
        name: "Eugene Yap",
        id: "NLSGCN00677262",
        timeslot: "9AM-10PM"
    }
    const f = {
        address: "915 TAMPINES STREET 91, 04-43 S520915",
        name: "Kelvin Gan",
        id: "NLXSG20528308",
        timeslot: "9AM-10PM"
    }
    const g = {
        address: "923 TAMPINES STREET 85, 03-43 S520916",
        name: "Chu Siew Hooi",
        id: "SHPS733109744",
        timeslot: "9AM-10PM"
    }
    const h = {
        address: "925 TAMPINES STREET 72, 09-52 S520916",
        name: "Sakshee",
        id: "NLXSG20527026",
        timeslot: "9AM-10PM"
    }


    return (
        <div>
            <Stack spacing={1.5}>
                <RouteCard details = {a}/>
                <RouteCard details = {b}/>
                <RouteCard details = {c}/>
                <RouteCard details = {d}/>
                <RouteCard details = {e}/>
                <RouteCard details = {f}/>
                <RouteCard details = {g}/>
                <RouteCard details = {h}/>
            </Stack>
        </div>
    )
}