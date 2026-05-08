"use client";
import { useState } from 'react';

export default function ExamPage() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { q: "ما هو مفهوم السلالة البشرية؟", a: ["مجموعة تشترك في اللغة", "مجموعة تشترك في الصفات الجسمية الوراثية", "مجموعة تسكن قارة واحدة"], correct: 1 },
    { q: "نسبة السلالة الزنجية من سكان العالم هي:", a: ["40%", "10%", "50%"], correct: 1 },
    { q: "تتميز السلالة المغولية بالبشرة:", a: ["البيضاء", "الداكنة", "الصفراء"], correct: 2 },
    { q: "من أقسام السلالة الزنجية جماعة:", a: ["البانتو", "الإسكيمو", "الهنود الحمر"], correct: 0 },
    { q: "تنتشر السلالة القوقازية في:", a: ["أوروبا وشمال أفريقيا", "شرق آسيا فقط", "أستراليا فقط"], correct: 0 },
    { q: "الهنود الحمر ينتمون إلى السلالة:", a: ["الزنجية", "القوقازية", "المغولية"], correct: 2 },
    { q: "تتميز السلالة القوقازية بالشعر:", a: ["المجعد", "الناعم أو المتموج", "الأسود المستقيم"], correct: 1 },
    { q: "تمثل السلالة القوقازية أكبر نسبة من سكان العالم:", a: ["صح", "خطأ"], correct: 0 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let tempScore = 0;
    questions.forEach((_, index) => {
      if (formData.get(`q${index}`) === questions[index].correct.toString()) {
        tempScore++;
      }
    });
    setScore(tempScore);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-right" dir="rtl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">الاختبار التقويمي الشامل</h1>
        <p className="text-slate-500">أجب عن الأسئلة التالية لقياس مستوى تحصيلك الدراسي</p>
      </div>

      {showResult ? (
        <div className="bg-white border-2 border-blue-500 rounded-[2.5rem] p-12 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6">
            {score}/8
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            {score >= 5 ? "أحسنتِ يا مريم! نتيجة رائعة" : "حاولي مرة أخرى للمراجعة"}
          </h2>
          <p className="text-slate-500 mb-8 text-lg">لقد أتممتِ اختبار السلالات البشرية بنجاح.</p>
          <button 
            onClick={() => {setShowResult(false); setScore(0);}}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            إعادة الاختبار
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl font-bold text-slate-800 mb-6 flex gap-3">
                <span className="text-blue-600">السؤال {index + 1}:</span>
                {item.q}
              </p>
              <div className="grid md:grid-cols-1 gap-3">
                {item.a.map((option, optIndex) => (
                  <label key={optIndex} className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-blue-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50 transition-all">
                    <input type="radio" name={`q${index}`} value={optIndex} required className="w-5 h-5 accent-blue-600" />
                    <span className="text-lg text-slate-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-[2rem] font-black text-2xl shadow-xl hover:bg-blue-600 transition-all mt-10">
            إرسال الإجابات وعرض الدرجة
          </button>
        </form>
      )}
    </div>
  );
}