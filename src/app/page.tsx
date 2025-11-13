import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/contact-form";

export default function Page() {
  return (
    <div className="py-10 grid gap-10">
      <section className="grid gap-4">
        <h1 className="text-4xl font-bold tracking-tight">
          こんにちは、平石太郎です。
        </h1>
        <p className="text-muted-foreground max-w-prose">
          Next.js(App Router) × shadcn/UI × zod × react-hook-form
          で作った最小スターター。Amplify SSRでデプロイ予定。
        </p>
      </section>

      <Separator />

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>自己紹介</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>フロントエンド中心に、Next.js/GraphQL/SSRの実装が得意です。</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>App Router / Server Components</li>
              <li>shadcn/UI, Tailwind CSS</li>
              <li>型安全（TypeScript, zod）</li>
            </ul>
          </CardContent>
        </Card>

        <Card id="contact">
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
