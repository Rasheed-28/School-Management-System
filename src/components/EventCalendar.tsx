"use client"
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type valuePiece = Date | null;
type value = valuePiece | [valuePiece, valuePiece];

export default function EventCalendar () {
    const [value, onChange] = useState<Value>(new Date());
    return <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onchange} value={value} />
    </div>
}