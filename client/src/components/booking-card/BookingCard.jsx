import React, { useState } from 'react'
import "./styles.css";
import { ChevronRight } from 'lucide-react';
import SecondaryBtn from '../button/SecondaryBtn';

const BookingCard = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState(1);

    const DatePicker = ({
        title,
        value,
        onChange
    }) => (
        <div className="form-group">
            <label>{title}</label>
            <div className="input-wrapper">
                <input
                    type="date"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    )

    return (
        <div className="check-form-container">

            <DatePicker 
                title="Check In"
                value={checkIn}
                onChange={setCheckIn}
            />

            <DatePicker 
                title="Check Out"
                value={checkOut}
                onChange={setCheckOut}
            />

            <div className="form-group">
                <label>Room</label>
                <div className="input-wrapper">
                    <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                        {[1, 2, 3, 4, 5].map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                    <span className="dropdown-icon">▼</span>
                </div>
            </div>

            <div className="check-btn">
                <SecondaryBtn 
                    title="Check Availability"
                    className='gold'
                />
            </div>
        </div>
    )
}

export default BookingCard;