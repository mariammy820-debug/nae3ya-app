import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-slate-900 text-slate-100 min-h-screen relative overflow-x-hidden font-sans">
        
        {/* عناصر جمالية في الخلفية (أضواء نيون ناعمة لمنح الموقع عمقاً واحترافية) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Navbar الاحترافي بتصميم زجاجي داكن مواكب لأحدث صيحات الويب */}
        <nav className="fixed top-4 left-4 right-4 z-50 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl shadow-black/40 max-w-7xl mx-auto">
          <div className="px-6 h-20 flex items-center justify-between">
            
            {/* اللوجو مع تأثير توهج ناعم */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                N
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                ناوية
              </span>
            </div>

            {/* الروابط الأساسية بتصميم أنيق وتأثيرات حركة عند التمرير */}
            <div className="hidden md:flex items-center gap-1">
              <a href="/" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">الرئيسية</a>
              <a href="/unit1" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">الزنجية</a>
              <a href="/unite2" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">المغولية</a>
              <a href="/unite3" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">القوقازية</a>
              <a href="/aboute" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300">عني</a>
            </div>

            {/* زر الاختبار النهائي المتوهج */}
            <div>
              <a 
                href="/exam" 
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95 group"
              >
                الاختبار النهائي
                <span className="bg-white/20 px-2 py-0.5 rounded-md text-[10px] font-medium backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                  8 أسئلة
                </span>
              </a>
            </div>

          </div>
        </nav>

        {/* محتوى الصفحة مع تباعد مناسب لتفادي شريط التنقل العلوي */}
        <div className="pt-32 pb-12 max-w-7xl mx-auto px-4 relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}