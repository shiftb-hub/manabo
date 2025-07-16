"use client";

import React from "react";

interface PasswordPolicyIndicatorProps {
  score: number;
  checks: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
  color: string;
  level: string;
}

const PasswordPolicyIndicator = ({
  checks,
  color,
  level,
}: PasswordPolicyIndicatorProps) => {
  return (
    <div className="mt-2 space-y-2 text-sm">
      <p className={`font-semibold ${color}`}>強度: {level}</p>
      <ul className="space-y-1">
        <li className="flex items-center gap-2">
          <span>{checks.length ? "✅" : "⭕"}</span>
          <span className={checks.length ? "text-green-700" : "text-gray-600"}>
            8文字以上
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>{checks.uppercase ? "✅" : "⭕"}</span>
          <span
            className={checks.uppercase ? "text-green-700" : "text-gray-600"}
          >
            英大文字（A〜Z）を含む
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>{checks.lowercase ? "✅" : "⭕"}</span>
          <span
            className={checks.lowercase ? "text-green-700" : "text-gray-600"}
          >
            英小文字（a〜z）を含む
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>{checks.number ? "✅" : "⭕"}</span>
          <span className={checks.number ? "text-green-700" : "text-gray-600"}>
            数字（0〜9）を含む
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>{checks.special ? "✅" : "⭕"}</span>
          <span className={checks.special ? "text-green-700" : "text-gray-600"}>
            記号（!@#$%など）を含む
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PasswordPolicyIndicator;
