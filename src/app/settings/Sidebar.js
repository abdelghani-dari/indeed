"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current path without using useRouter
import { UserCog, Mail, MonitorSmartphone, Lock, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { href: "/settings/account", label: "Account Settings", icon: UserCog, description: "Contact information and password" },
        { href: "/settings/email", label: "Email Settings", icon: Mail, description: "Preferences for email messages" },
        { href: "/settings/device", label: "Device Management", icon: MonitorSmartphone, description: "Manage your active devices and sessions" },
        { href: "/settings/privacy", label: "Privacy Settings", icon: Lock, description: "Information about privacy settings" },
    ];

    return (
        <aside className="relative left-0 w-1/4 h-screen transition-transform bg-slate-100 dark:bg-gray-800" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto">
                <ul className="space-y-3 font-medium">
                    <li>
                        <span
                            className="flex items-center p-2 text-slate-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
                        >
                            <FontAwesomeIcon
                                className="group-hover:text-[#164081]"
                                style={{ height: "23px", width: "23px" }}
                                icon={faGear}
                            />

                            <span className="ms-3 text-3xl py-3 font-semibold">
                                Settings
                            </span>
                        </span>
                    </li>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-[#ffffff] text-slate-800 dark:hover:bg-gray-700 group hover:ps-6 transition-all ${pathname === link.href ? "bg-[#ffffff]" : ""
                                    }`}
                            >
                                <link.icon />
                                <div className="w-full flex items-center">
                                    <div className="grid gap-1">
                                        <span className="flex-1 ms-5 whitespace-nowrap">{link.label}</span>
                                        <span className="inline-flex items-center justify-center px-2 text-sm font-medium ms-3 text-slate-500 rounded-full dark:bg-gray-700 dark:text-gray-300">{link.description}</span>
                                    </div>
                                    <span className="ms-auto relative transition-all duration-150 ease-in-out text-slate-400 group-hover:text-slate-700">
                                        <ChevronRight />
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
