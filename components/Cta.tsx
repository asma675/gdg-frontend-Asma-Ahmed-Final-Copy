import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Cta() {
  return (
    <section id="get-started" className="section py-16">
      <Card>
        <CardContent className="p-8 flex items-center justify-between gap-6 flex-col md:flex-row">
          <div>
            <h3 className="text-xl font-semibold">Hook it up and deploy</h3>
            <p className="text-sm text-black/70 mt-1">
              Set <code>NEXT_PUBLIC_BACKEND_URL</code> to point at your API and push a build to your host of choice.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild><a href="#contact">Contact</a></Button>
            <Button asChild><a href="#features">Explore Features</a></Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}