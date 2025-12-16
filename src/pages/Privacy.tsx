export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="container-padded flex-1 flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-2xl mb-4 font-bold text-brand-700">Privacy Policy</h1>
        <div className="max-w-2xl mx-auto text-base text-gray-700 space-y-4">
          <p>We value your privacy. EduLink Writers does not share your personal information with third parties. All data is handled securely and confidentially.</p>
          <ul className="list-disc list-inside text-left space-y-1">
            <li>We collect only necessary information to provide our services.</li>
            <li>Your data is stored securely and never sold or shared.</li>
            <li>You may contact us at <a href="mailto:support@edulinkwriters.com" className="text-brand-600 underline">support@edulinkwriters.com</a> for privacy concerns.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
