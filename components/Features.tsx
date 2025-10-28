import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { title: 'Layout fidelity', text: 'Spacing, rhythm, and type align with the Figma reference.' },
  { title: 'Practical a11y', text: 'Keyboard focus states and semantic structure are in place.' },
  { title: 'Small footprint', text: 'Next.js + Tailwind keep the build lean and quick.' },
  { title: 'Type-ready', text: 'TypeScript is configured out of the box.' },
  { title: 'Composability', text: 'Components are small and easy to re-arrange.' },
  { title: 'Test friendly', text: 'Structured for adding unit and UI tests later.' },
]

export default function Features() {
  return (
    <section id="features" className="section py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">What this build focuses on</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription>{f.text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}