import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Showcase() {
  return (
    <section id="showcase" className="section py-16">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Responsive by default</CardTitle>
            <CardDescription>Grid and spacing scale smoothly from mobile to desktop.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="rounded-xl h-48 bg-gradient-to-br from-brand-50 via-white to-brand-100 ring-1 ring-black/5" />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Component first</CardTitle>
            <CardDescription>Sections are composed of small pieces for reuse.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="rounded-xl h-48 bg-gradient-to-br from-brand-50 via-white to-brand-100 ring-1 ring-black/5" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}