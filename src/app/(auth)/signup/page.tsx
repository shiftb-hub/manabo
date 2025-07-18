"use client";

import { useRouter } from "next/navigation";
import SignupScreen from "@/app/(auth)/_components/SignupScreen";

export default function SignupPage() {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push("/login");
  };

  const handleNavigateToEmailVerification = (email: string) => {
    router.push(`/verify-email?email=${encodeURIComponent(email)}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SignupScreen
      onNavigateToLogin={handleNavigateToLogin}
      onNavigateToEmailVerification={handleNavigateToEmailVerification}
      onBack={handleBack}
    />
  );
}
