export default function Logos() {
  return (
    <section className="section py-10" aria-label="Customer logos">
      <p className="text-center text-sm text-black/60 mb-6">Used in teams of various sizes</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 grayscale">
        {['Acme','Globex','Umbrella','Initech','Stark','Wayne'].map((name) => (
          <div key={name} className="flex items-center justify-center p-4 bg-white ring-1 ring-black/5 rounded-xl shadow-soft">
            <span className="text-black/50 text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}