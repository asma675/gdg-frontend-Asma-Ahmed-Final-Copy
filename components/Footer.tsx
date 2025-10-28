export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-10">
      <div className="section py-8 text-sm text-black/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} GDG. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-black" href="#privacy">Privacy</a>
          <a className="hover:text-black" href="#terms">Terms</a>
          <a className="hover:text-black" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}