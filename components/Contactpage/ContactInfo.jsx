"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Телефон",
        description: "+7 (999) 999-99-99",
    },
    {
        icon: <FaEnvelope />,
        title: "Почта",
        description: "почта@yandex.ru",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Адрес",
        description: "ул Вернадского 82",
    },
];

export default function ContactInfo() {
    return (
        <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                    <div className="w-[72px] h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div>
                        <p className="text-white/60">{item.title}</p>
                        <h3>{item.description}</h3>
                    </div>
                </li>
            ))}
        </ul>
    );
}
