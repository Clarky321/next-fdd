"use client";

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
    SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Погнали брата! Пиши своё сообщение!</h3>
            <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Имя" />
                <Input type="lastname" placeholder="Фамилия" />
                <Input type="email" placeholder="Почта" />
                <Input type="phone" placeholder="Номер телефона" />
            </div>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Выберите услугу</SelectLabel>
                        <SelectItem value="dev">Веб-разработка</SelectItem>
                        <SelectItem value="design">UI/UX дизайн</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Textarea className="h-[200px]" placeholder="Введите своё сообщение." />
            <Button variant="outline">Отправить сообщение</Button>
        </form>
    );
}
