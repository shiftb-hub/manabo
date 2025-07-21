"use client";

import { Button } from "@/app/_components/ui/button";
import { Settings, LogOut } from "lucide-react";
import MyProfileHeader from "./MyProfileHeader";
import MyPageMenu from "./MyPageMenu";

export default function MyPageLayout() {
  // 画面遷移時のナビゲーション処理
  const handleNavigate = (screen: string): void => {
    // TODO: 実装例（ルーターを使う場合）
    // router.push(`/mypage/${screen}`);
    console.log("Navigate to:", screen);
  };

  // ログアウト処理
  const handleLogout = (): void => {
    console.log("Logout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-6 max-w-md pb-24">
        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">マイページ</h1>
          <div className="flex items-center space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-gray-400"
              onClick={() => handleNavigate("settings")}
            >
              <Settings className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-red-400 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* プロフィール情報とメニュー */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg rounded-lg p-6">
          <MyProfileHeader />
          <MyPageMenu />
        </div>
      </div>
    </div>
  );
}
