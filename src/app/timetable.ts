import { Bus } from "./Bus";
import { Driver } from "./driver";
import { Route } from "./routes";

export class Timetable{
    timetableId:String;
    departureDateTime:String;
    bus:Bus;
    driver:Driver;
    route:Route;
}