export default function Unit3() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-right" dir="rtl">
      {/* القسم العلوي - Hero Section */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-12 text-white shadow-2xl mb-12">
        <div className="relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold mb-4">
            الوحدة الثالثة
          </span>
          <h1 className="text-5xl font-black mb-6 drop-shadow-md">السلالة القوقازية</h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-2xl">
            تعتبر أكبر سلالة من حيث العدد، حيث تمثل نصف سكان العالم تقريباً، وتتميز بتنوعها وانتشارها الواسع في أغلب القارات.
          </p>
        </div>
        {/* عنصر ديكور خلفي */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      {/* تفاصيل السلالة - كروت ملونة */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* كارت الصفحات الجسدية بألوان نص جديدة */}
        <div className="bg-white border border-indigo-50 rounded-[2.5rem] p-10 shadow-xl shadow-indigo-100/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl text-indigo-600">
              👤
            </div>
            <h2 className="text-2xl font-black text-indigo-900">الصفات الجسدية</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-600 text-lg">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span className="font-bold text-indigo-700">البشرة:</span> بيضاء وردية أو بنية فاتحة (قمحية).
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-lg">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span className="font-bold text-indigo-700">الشعر:</span> ناعم أو متموج.
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-lg">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span className="font-bold text-indigo-700">الشفاه:</span> رفيعة.
            </li>
          </ul>
        </div>

        {/* كارت التوزيع الجغرافي بألوان نص جديدة */}
        <div className="bg-white border border-blue-50 rounded-[2.5rem] p-10 shadow-xl shadow-blue-100/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl text-blue-600">
              📍
            </div>
            <h2 className="text-2xl font-black text-blue-900">أماكن الانتشار</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            تنتشر في كافة قارات العالم: 
            <span className="block mt-3 font-bold text-blue-700">
              أوروبا، أمريكا الشمالية والجنوبية، أستراليا، وشمال أفريقيا (مثل سكان دول حوض البحر المتوسط).
            </span>
          </p>
        </div>

      </div>

      {/* زر العودة والتقدم */}
      <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <a href="/unite2" className="text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2">
          <span>→</span> السلالة المغولية
        </a>
        <a href="/exam" className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
          انتقل للاختبار 
        </a>
      </div>
    </div>
  );
}