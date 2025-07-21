"use client";

import Link from "next/link";
import { mypageMenuItems } from "@/app/(mypage)/mypage/_constants/mypageMenuItems";
import type { MenuItem } from "@/app/(mypage)/mypage/_types/mypageTypes";

export default function MyPageMenu() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {mypageMenuItems.map((item: MenuItem) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-start w-full px-4 py-2 rounded-md bg-white/90 text-green-700 hover:bg-white border-0 text-sm font-medium transition"
          >
            <Icon className="w-4 h-4 mr-2" />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
