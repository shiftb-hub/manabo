import Link from "next/link";
import { Label } from "@/app/_components/ui/label";

export default function AgreeToTermsLabel() {
  return (
    <Label htmlFor="terms" className="text-sm text-gray-600">
      以下の{" "}
      <Link
        href="/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-green-600 hover:text-green-800"
      >
        利用規約
      </Link>
      と{" "}
      <Link
        href="/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-green-600 hover:text-green-800"
      >
        プライバシーポリシー
      </Link>
      に同意します
    </Label>
  );
}
