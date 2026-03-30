export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0e0e0e]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-bold tracking-tighter text-white">
          THE MAG COMPANY
        </div>
        <div className="flex gap-8">
          <a className="text-zinc-500 hover:text-[#ebbf8d] transition-colors text-[10px] uppercase tracking-widest" href="#">Privacy Policy</a>
          <a className="text-zinc-500 hover:text-[#ebbf8d] transition-colors text-[10px] uppercase tracking-widest" href="#">Terms of Service</a>
          <a className="text-zinc-500 hover:text-[#ebbf8d] transition-colors text-[10px] uppercase tracking-widest" href="#">Press Kit</a>
        </div>
        <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">
          &copy; 2026 THE MAG COMPANY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
