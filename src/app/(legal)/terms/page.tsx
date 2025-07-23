export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">利用規約</h1>
      <p className="mb-4">
        この利用規約（以下「本規約」といいます）は、本サービスの利用条件を定めるものです。
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">第1条（適用）</h2>
      <p className="mb-4">
        本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">第2条（禁止事項）</h2>
      <ul className="list-disc list-inside mb-4">
        <li>法令または公序良俗に違反する行為</li>
        <li>本サービスの運営を妨害する行為</li>
        <li>不正アクセスを試みる行為</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">第3条（免責事項）</h2>
      <p className="mb-4">
        当社は、本サービスに事実上または法律上の瑕疵がないことを保証するものではありません。
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        第4条（準拠法・裁判管轄）
      </h2>
      <p>
        本規約は、日本法に準拠し、日本国内の裁判所を第一審の専属的合意管轄とします。
      </p>
    </main>
  )
}
