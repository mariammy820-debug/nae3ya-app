export default function Unit2() {
  const groups = ["الهنود الحمر (الأمريكتين)", "الإسكيمو (شمال كندا)", "جماعات التنجوس (سيبيريا)"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-right relative z-10" dir="rtl">
      
      {/* شريط التنقل المتوافق مع التصميم الزجاجي الداكن */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 bg-slate-800/40 w-fit px-5 py-2.5 rounded-full shadow-lg border border-slate-700/50 backdrop-blur-md">
        <a href="/" className="hover:text-orange-400 transition-colors">الرئيسية</a>
        <span className="text-slate-600">/</span>
        <span className="text-slate-200 font-bold">السلالة المغولية</span>
      </nav>

      {/* القسم الرئيسي - السلالة الصفراء */}
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-[3.5rem] p-10 shadow-2xl backdrop-blur-xl mb-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl opacity-50"></div>
        
        {/* الصورة التعليمية الجديدة المحدثة بدقة عالية جداً ومطابقة للمواصفات */}
        <div className="w-full md:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-slate-700/50 group relative">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" 
            alt="خصائص ومقاييس السلالة المغولية التعليمية" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* شريط توضيحي زجاجي أسفل الصورة */}
          <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 backdrop-blur-md p-4 text-center border-t border-slate-700/50">
            <p className="text-orange-400 text-sm font-bold">توضيح: العيون المنحرفة (الضيقة) والشعر الأسود المسترسل والبشرة الصفراء</p>
          </div>
        </div>
        
        <div className="flex-1 z-10">
          <span className="text-orange-400 font-black text-sm mb-2 block tracking-widest uppercase">السلالة الصفراء</span>
          <h1 className="text-5xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">السلالة المغولية</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            تنتشر بشكل رئيسي في قارة آسيا وتضم حوالي <span className="text-orange-400 font-extrabold text-2xl mx-1">40%</span> من سكان العالم، وتتميز بخصائص مظهرية دقيقة تميزها بوضوح عن باقي السلالات.
          </p>
          <div className="flex flex-wrap gap-4">
             <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-orange-600/20 hover:from-orange-500 hover:to-orange-400 transition-all">شرق آسيا</div>
             <div className="bg-slate-700 text-slate-200 px-6 py-2.5 rounded-xl font-bold border border-slate-600 hover:bg-slate-600 transition-all">جنوب شرق آسيا</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* كارت الصفات الجسدية بتصميم داكن متناسق */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-black text-orange-400 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-xl shadow-inner">⚖️</div>
            الصفات الجسدية المميزة
          </h2>
          <div className="space-y-4">
            <div className="p-5 bg-slate-900/50 rounded-2xl border-r-8 border-orange-500 border border-slate-800 flex justify-between items-center group hover:bg-slate-800/60 transition-all duration-300">
              <span className="text-slate-200 font-bold text-lg">لون البشرة</span>
              <span className="text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/10">الصفراء الفاتحة</span>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-2xl border-r-8 border-orange-500 border border-slate-800 flex justify-between items-center group hover:bg-slate-800/60 transition-all duration-300">
              <span className="text-slate-200 font-bold text-lg">شكل العيون</span>
              <span className="text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/10">منحرفة (ضيقة)</span>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-2xl border-r-8 border-orange-500 border border-slate-800 flex justify-between items-center group hover:bg-slate-800/60 transition-all duration-300">
              <span className="text-slate-200 font-bold text-lg">نوع الشعر</span>
              <span className="text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/10">أسود مسترسل (مستقيم)</span>
            </div>
          </div>
        </div>

        {/* كارت الجماعات */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center backdrop-blur-xl">
          <h2 className="text-2xl font-black mb-8 relative z-10 text-orange-400 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-xl shadow-inner">👥</div>
            جماعات تنتمي إليها
          </h2>
          <div className="space-y-4 relative z-10">
            {groups.map((group, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-900/40 backdrop-blur-md p-4 rounded-2xl border border-slate-700/50 hover:bg-slate-700/40 hover:-translate-x-1 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center font-bold text-sm shadow-md shadow-orange-600/20">
                  {i + 1}
                </div>
                <span className="text-lg font-bold text-slate-200">{group}</span>
              </div>
            ))}
          </div>
          {/* تأثير توهج داخلي للكارت */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}