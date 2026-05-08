export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">كلية التربية النوعية - جامعة عين شمس</h1>
        <p className="text-xl mt-2">قسم تكنولوجيا التعليم</p>
      </header>
      
      <div className="card space-y-4 border-r-4 border-r-accent">
        <h2 className="text-2xl font-bold border-b pb-2">بيانات المشروع</h2>
        <p><strong>الاسم:</strong> مريم محمد دداموني عبدالرحمن</p>
        <p><strong>الفرقة:</strong> الثالثة (معلم حاسب آلي)</p>
        <p><strong>المقرر:</strong> مواقع الويب التعليمية</p>
        <p><strong>المادة:</strong> الدراسات الاجتماعية - السلالات البشرية</p>
        <p className="mt-4 text-slate-500 italic">تحت إشراف: د. أمل حسان، د. محمد عادل</p>
      </div>
    </div>
  );
}