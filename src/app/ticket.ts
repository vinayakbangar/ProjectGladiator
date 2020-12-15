import { Timetable } from "./timetable";
import { User } from "./user";

export class Ticket{
    ticketId:number;
    fare:number;
    journeyType:String;
    seatNumbers:String;
    timetable:Timetable;
    user:User;
}