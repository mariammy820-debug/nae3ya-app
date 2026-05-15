export default function Unit3() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-right relative z-10" dir="rtl">
      
      {/* القسم العلوي - Hero Section بتصميم متدرج ساحر ومتناسق مع الطابع الداكن */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-950 p-12 text-white shadow-2xl mb-12 border border-indigo-500/20">
        <div className="relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm font-bold mb-4 text-indigo-300 border border-white/5">
            الوحدة الثالثة
          </span>
          <h1 className="text-5xl font-black mb-6 drop-shadow-md bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            السلالة القوقازية
          </h1>
          <p className="text-xl text-indigo-200 leading-relaxed max-w-2xl">
            تعتبر أكبر سلالة من حيث العدد، حيث تمثل نصف سكان العالم تقريباً (حوالي <span className="text-cyan-400 font-bold">50%</span>)، وتتميز بتنوعها وانتشارها الواسع في أغلب قارات العالم.
          </p>
        </div>
        {/* عنصر ديكور خلفي متوهج */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
      </div>

      {/* قسم تفاصيل السلالة مع إضافة الصورة التعليمية الجديدة */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        
        {/* كارت الصفات الجسدية بتصميم زجاجي داكن */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-2xl text-indigo-400 shadow-inner">
                👤
              </div>
              <h2 className="text-2xl font-black text-indigo-300">الصفات الجسدية المميزة</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300 text-lg p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></span>
                <p><span className="font-bold text-indigo-400 ml-1">البشرة:</span> بيضاء وردية أو بنية فاتحة (قمحية مائلة للدفء).</p>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-lg p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></span>
                <p><span className="font-bold text-indigo-400 ml-1">الشعر:</span> ناعم مسترسل أو متموج بشكل انسيابي.</p>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-lg p-3 bg-slate-900/40 rounded-xl border border-slate-800">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></span>
                <p><span className="font-bold text-indigo-400 ml-1">الشفاه:</span> رفيعة وردية محددة بدقة.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* كارت الصورة التعليمية الجديدة المحدثة فائقة الدقة */}
        <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-700/50 group relative bg-slate-800/40">
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000" 
            alt="ملامح وخصائص السلالة القوقازية" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* شريط توضيحي زجاجي مدمج أسفل الصورة */}
          <div className="absolute bottom-0 inset-x-0 bg-slate-900/85 backdrop-blur-md p-4 text-center border-t border-slate-700/50">
            <p className="text-indigo-300 text-sm font-bold">توضيح: بشرة قمحية فاتحة، شعر متموج طبيعي، وشفاه قوقازية رفيعة متناسقة</p>
          </div>
        </div>

      </div>

      {/* كارت التوزيع الجغرافي العريض لأناقة بصرية أكبر */}
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-2xl text-blue-400 shadow-inner">
            📍
          </div>
          <h2 className="text-2xl font-black text-blue-300">أماكن الانتشار والتوزيع الجغرافي</h2>
        </div>
        <p className="text-xl text-slate-300 leading-relaxed">
          تتميز السلالة القوقازية بانتشارها الواسع والمرن في كافة قارات العالم تقريباً:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {["قارة أوروبا بالكامل", "أمريكا الشمالية والجنوبية", "القارة الأسترالية", "شمال أفريقيا (حوض المتوسط)"].map((place, index) => (
            <div key={index} className="bg-slate-950/40 border border-slate-800 p-4 rounded-2xl text-center font-bold text-blue-400">
              {place}
            </div>
          ))}
        </div>
      </div>

      {/* شريط أزرار التنقل والتقدم المتوافق مع الهوية الداكنة */}
      <div className="mt-12 flex justify-between items-center bg-slate-800/40 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-slate-700/50">
        <a href="/unite2" className="text-slate-400 hover:text-slate-200 font-bold flex items-center gap-2 transition-colors">
          <span>&rarr;</span> السلالة المغولية
        </a>
        <a 
          href="/exam" 
          className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95"
        >
          انتقل للاختبار النهائي
        </a>
      </div>

    </div>
  );
}