export default function Unit2() {
  const groups = ["الهنود الحمر (الأمريكتين)", "الإسكيمو (شمال كندا)", "جماعات التنجوس (سيبيريا)"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-right" dir="rtl">
      {/* شريط التنقل */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 bg-white w-fit px-4 py-2 rounded-full shadow-sm border border-slate-100">
        <a href="/" className="hover:text-orange-600 transition-colors">الرئيسية</a>
        <span>/</span>
        <span className="text-slate-900 font-bold">السلالة المغولية</span>
      </nav>

      {/* القسم الرئيسي - السلالة الصفراء */}
      <div className="bg-white border border-orange-50 rounded-[3.5rem] p-10 shadow-2xl mb-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
        
        {/* صورة تعليمية للملامح المغولية - تم تحديث الرابط لصورة أوضح */}
        <div className="w-full md:w-1/2 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-orange-50 group relative">
          <img 
            src="https://images.pexels.com/photos/2224736/pexels-photo-2224736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="خصائص السلالة المغولية التعليمية" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute bottom-0 inset-x-0 bg-orange-900/70 backdrop-blur-md p-4 text-center border-t border-white/10">
            <p className="text-white text-sm font-bold">توضيح: العيون المنحرفة (الضيقة) والشعر الأسود المسترسل</p>
          </div>
        </div>
        
        <div className="flex-1 z-10">
          <span className="text-orange-600 font-black text-sm mb-2 block tracking-widest">السلالة الصفراء</span>
          <h1 className="text-5xl font-black text-slate-900 mb-6">السلالة المغولية</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            تنتشر في قارة آسيا وتضم حوالي <span className="text-orange-600 font-bold">40%</span> من سكان العالم. وتتميز بخصائص جسمية دقيقة تميزها عن باقي الأجناس.
          </p>
          <div className="flex flex-wrap gap-4">
             <div className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors">شرق آسيا</div>
             <div className="bg-amber-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-amber-200 hover:bg-amber-600 transition-colors">جنوب شرق آسيا</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* كارت الصفات الجسدية */}
        <div className="bg-white border border-orange-50 rounded-[2.5rem] p-10 shadow-xl shadow-orange-200/30">
          <h2 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl shadow-inner">⚖️</div>
            الصفات الجسدية
          </h2>
          <div className="space-y-4">
            <div className="p-5 bg-orange-50 rounded-2xl border-r-8 border-orange-500 flex justify-between items-center group hover:bg-orange-100 transition-all">
              <span className="text-orange-900 font-bold text-lg">لون البشرة</span>
              <span className="text-slate-600 font-medium">الصفراء</span>
            </div>
            <div className="p-5 bg-orange-50 rounded-2xl border-r-8 border-orange-500 flex justify-between items-center group hover:bg-orange-100 transition-all">
              <span className="text-orange-900 font-bold text-lg">شكل العيون</span>
              <span className="text-slate-600 font-medium">منحرفة (ضيقة)</span>
            </div>
            <div className="p-5 bg-orange-50 rounded-2xl border-r-8 border-orange-500 flex justify-between items-center group hover:bg-orange-100 transition-all">
              <span className="text-orange-900 font-bold text-lg">نوع الشعر</span>
              <span className="text-slate-600 font-medium">أسود مستقيم (مسترسل)</span>
            </div>
          </div>
        </div>

        {/* كارت الجماعات */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <h2 className="text-2xl font-black mb-8 relative z-10 text-orange-400">جماعات تنتمي إليها</h2>
          <div className="space-y-4 relative z-10">
            {groups.map((group, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/5 hover:bg-white/20 transition-all">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {i + 1}
                </div>
                <span className="text-lg font-bold">{group}</span>
              </div>
            ))}
          </div>
          {/* تأثير خلفية الكارت */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}