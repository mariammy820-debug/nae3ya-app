import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-slate-50 text-slate-900">
        {/* Navbar الاحترافي */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* اللوجو أو اسم المنصة */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">
                N
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-800">
                ناوية
              </span>
            </div>

            {/* الروابط الأساسية بتصميم أنيق */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="nav-link-modern">الرئيسية</a>
              <a href="/unit1" className="nav-link-modern">الزنجية</a>
              <a href="/unite2" className="nav-link-modern">المغولية</a>
              <a href="/unite3" className="nav-link-modern">القوقازية</a>
              <a href="/aboute" className="nav-link-modern">عني</a>
            </div>

            {/* زر الاختبار النهائي المميز */}
            <div>
              <a 
                href="/exam" 
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 hover:-translate-y-0.5 active:scale-95 transition-all shadow-md shadow-slate-200 flex items-center gap-2"
              >
                الاختبار النهائي
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">8 أسئلة</span>
              </a>
            </div>

          </div>
        </nav>

        {/* مساحة فارغة لتعويض الشريط الثابت في الأعلى */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}