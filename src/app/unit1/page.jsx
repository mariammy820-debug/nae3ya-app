export default function Unit1() {
  const sections = ["الزنوج السودانيون", "البانتو", "النيليون الحاميون", "الأقزام", "البوشمن والهوتنتوت"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-right" dir="rtl">
      {/* شريط التنقل */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 bg-white w-fit px-4 py-2 rounded-full shadow-sm border border-slate-100">
        <a href="/" className="hover:text-blue-600 transition-colors">الرئيسية</a>
        <span>/</span>
        <span className="text-slate-900 font-bold">السلالة الزنجية</span>
      </nav>

      {/* القسم الرئيسي - الخصائص والملامح */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 text-white mb-12 shadow-2xl overflow-hidden">
        <div className="order-2 md:order-1">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-bold mb-4">الوحدة الأولى</span>
          <h1 className="text-5xl font-black mb-6 tracking-tight">السلالة الزنجية</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            تمثل هذه السلالة حوالي <span className="text-amber-400 font-bold">10%</span> من سكان العالم. وتتميز بخصائص جسدية فريدة يرجع أصلها إلى المناطق المدارية في أفريقيا.
          </p>
        </div>
        
        {/* صورة تعليمية للملامح */}
        <div className="order-1 md:order-2 w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group relative">
          <img 
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800" 
            alt="خصائص السلالة الزنجية" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-md p-4 text-center border-t border-white/10">
            <p className="text-white text-sm font-medium">صورة توضيحية: الأنف العريض والشفاه الغليظة</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* كارت الصفحات الجسدية */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/40">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
            الصفات الجسدية
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <span className="text-2xl">👤</span>
              <span className="text-lg font-bold text-slate-700">بشرة داكنة (سوداء)</span>
            </li>
            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <span className="text-2xl">👃</span>
              <span className="text-lg font-bold text-slate-700">أنف عريض وشفاه غليظة</span>
            </li>
            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <span className="text-2xl">🦱</span>
              <span className="text-lg font-bold text-slate-700">شعر مجعد</span>
            </li>
          </ul>
        </div>

        {/* كارت الأقسام */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/40">
          <h2 className="text-2xl font-black text-slate-900 mb-8">أقسام الزنوج</h2>
          <div className="grid grid-cols-1 gap-3">
            {sections.map((s, index) => (
              <div key={index} className="px-6 py-4 bg-amber-50 border-r-4 border-amber-500 rounded-xl font-bold text-amber-900 shadow-sm">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}