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
                                        <SelectItem value="cts">Веб-разработка</SelectItem>
                                        <SelectItem value="mst">Веб-разработка</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
                </div>
            </div>
        </section>
    );
}