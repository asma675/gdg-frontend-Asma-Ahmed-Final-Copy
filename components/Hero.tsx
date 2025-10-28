"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ApiState = { status: string; data?: any; error?: string }

export default function Hero() {
  const [api, setApi] = useState<ApiState>({ status: "Checking…" })

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_BACKEND_URL
    if (!base) {
      setApi({ status: "Set NEXT_PUBLIC_BACKEND_URL to call backend." })
      return
    }
    const url = `${base}/health`
    fetch(url, { headers: { Accept: "application/json" } })
      .then(async (r) => {
        const text = await r.text()
        let parsed: any
        try { parsed = JSON.parse(text) } catch { parsed = { raw: text } }
        setApi({ status: r.ok ? "OK" : `Error ${r.status}`, data: parsed })
      })
      .catch((err) => setApi({ status: "Network error", error: String(err?.message || err) }))
  }, [])

  return (
    <section className="section pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="max-w-xl">
          <Badge className="mb-4">Candidate build</Badge>
          <h1 className="text-4xl md:text-5xl/tight font-black tracking-tight">
            A clean starting point for your product.
            <span className="block text-brand-700">Built with attention to detail.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-black/70">
            The layout mirrors the Figma reference with consistent spacing and readable type. 
            The code stays small and easy to extend after review.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild><a href="#get-started">Get Started</a></Button>
            <Button variant="outline" asChild><a href="#showcase">Preview sections</a></Button>
          </div>

          <div className="mt-6 text-xs text-black/60">
            <span className="font-semibold">Backend status:</span>{" "}
            <span aria-live="polite">{api.status}</span>
          </div>
          {api.data && (
            <pre className="mt-3 text-xs bg-black/5 p-3 rounded-xl overflow-auto max-h-40">
{JSON.stringify(api.data, null, 2)}
            </pre>
          )}
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-[1.75rem] bg-gradient-to-br from-brand-100 via-white to-brand-50 ring-1 ring-black/5 shadow-soft p-4">
            <div className="grid grid-cols-3 gap-3 h-full">
              <div className="col-span-2 rounded-xl bg-white ring-1 ring-black/5 shadow-soft p-4 flex flex-col gap-3">
                <div className="h-4 w-24 rounded bg-brand-200"></div>
                <div className="h-3 w-40 rounded bg-black/10"></div>
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  <div className="h-20 rounded bg-black/5"></div>
                  <div className="h-20 rounded bg-black/5"></div>
                  <div className="h-20 rounded bg-black/5"></div>
                </div>
              </div>
              <div className="rounded-xl bg-white ring-1 ring-black/5 shadow-soft p-4 flex flex-col gap-2">
                <div className="h-3 w-20 rounded bg-black/10"></div>
                <div className="h-3 w-28 rounded bg-black/10"></div>
                <div className="h-3 w-24 rounded bg-black/10"></div>
                <div className="mt-auto h-8 rounded-xl bg-brand-500/90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}