export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="container-padded flex-1 flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-2xl mb-4 font-bold text-brand-700">Contact Us</h1>
        <p className="max-w-2xl text-base text-gray-700 mb-4">
          Have questions or need support? Reach out to our team and we’ll get back to you as soon as possible.
        </p>
        <a href="mailto:support@edulinkwriters.com" className="text-brand-600 underline">support@edulinkwriters.com</a>
      </section>
    </div>
  )
}
