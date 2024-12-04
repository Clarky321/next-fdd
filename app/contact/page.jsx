"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

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


export default function Contact() {
    return (
        <section className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">
                                Погнали брата! Пиши своё сообщение!
                            </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit architecto quo esse libero accusamus sed at! Illo culpa aspernatur beatae, debitis, velit ipsam harum ad provident necessitatibus, quos dignissimos exercitationem.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Имя" />
                                <Input type="lastname" placeholder="Фамилия" />
                                <Input type="email" placeholder="Почта" />
                                <Input type="phone" placeholder="Номер телефона" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Выберите услугу" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Выберите услугу</SelectLabel>
                                        <SelectItem value="est">Веб-разработка</SelectItem>
                                        <SelectItem value="cts">UI/UX дизайн</SelectItem>
                                        <SelectItem value="mst">Деплой проекта</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Введите своё сообщение."
                            />
                            {/* btn */}
                            <Button variant="outline" className="max-w-60">
                                Отправить сообщение
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[24px]" >{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3>{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}