export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>
      <p className="mb-4">
        本プライバシーポリシーは、本サービスにおけるユーザーの個人情報の取扱いについて定めたものです。
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">1. 取得する情報</h2>
      <ul className="list-disc list-inside mb-4">
        <li>氏名、メールアドレスなどの登録情報</li>
        <li>アクセスログ、クッキーなど</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">2. 利用目的</h2>
      <ul className="list-disc list-inside mb-4">
        <li>サービス提供および改善</li>
        <li>ユーザーサポートのため</li>
        <li>利用規約違反への対応</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">3. 第三者提供</h2>
      <p className="mb-4">
        法令に基づく場合を除き、個人情報を第三者に提供することはありません。
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">4. お問い合わせ</h2>
      <p>
        プライバシーに関するお問い合わせは support@example.com
        までご連絡ください。
      </p>
    </main>
  )
}
