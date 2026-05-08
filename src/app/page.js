export default function HomePage() {
  const units = [
    { 
      id: "unit1", 
      title: "السلالة الزنجية", 
      desc: "تتميز بالبشرة الداكنة، والأنف العريض، والشفاه الغليظة. تمثل 10% من سكان العالم.",
      icon: "🌍",
      btnColor: "bg-slate-900 shadow-slate-200" 
    },
    { 
      id: "unite2", 
      title: "السلالة المغولية", 
      desc: "تتميز بالبشرة الصفراء، والعيون الضيقة، والشعر الأسود المستقيم.",
      icon: "🌏",
      btnColor: "bg-amber-600 shadow-amber-200" 
    },
    { 
      id: "unite3", 
      title: "السلالة القوقازية", 
      desc: "تتميز بالبشرة البيضاء أو القمحية، والشعر الناعم المتموج.",
      icon: "🌎",
      btnColor: "bg-blue-600 shadow-blue-200" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-right" dir="rtl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-6">
          رحلة تعلم <span className="text-blue-600">السلالات البشرية</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          اختر الوحدة التعليمية وابدأ في استكشاف خصائص وأماكن انتشار سلالات العالم.
        </p>
      </div>

      {/* Modern Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {units.map((unit) => (
          <div key={unit.id} className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/60 hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between">
            
            <div>
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {unit.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">{unit.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-8">
                {unit.desc}
              </p>
            </div>

            {/* الزر المطلوب بستايل احترافي */}
            <a 
              href={`/${unit.id}`} 
              className={`inline-flex items-center justify-center w-full py-4 rounded-2xl text-white font-bold text-lg shadow-lg hover:brightness-110 active:scale-95 transition-all ${unit.btnColor}`}
            >
              ابدأ الدرس الآن
              <span className="mr-2 text-xl group-hover:translate-x-[-4px] transition-transform">←</span>
            </a>
          </div>
        ))}
      </div>

      {/* قسم الاختبار النهائي ككارت عريض */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-200">
        <div className="text-right mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">هل انتهيت من المذاكرة؟</h2>
          <p className="text-blue-100 text-lg">اختبر معلوماتك الآن في الاختبار التفاعلي النهائي.</p>
        </div>
        <a href="/exam" className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-colors shadow-lg">
          ابدأ الاختبار 
        </a>
      </div>
    </div>
  );
}