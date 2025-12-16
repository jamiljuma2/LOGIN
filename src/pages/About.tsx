export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="container-padded flex-1 flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-2xl mb-4 font-bold text-brand-700">About EduLink Writers</h1>
        <p className="max-w-2xl text-base text-gray-700 mb-4">
          EduLink Writers is a platform connecting students and professional writers for academic assignments, essays, and research help. Our mission is to provide quality, timely, and confidential academic support to learners everywhere.
        </p>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside text-gray-600 text-base space-y-1">
          <li>Trusted by students and writers across Kenya and beyond</li>
          <li>Secure, confidential, and user-friendly platform</li>
          <li>Dedicated support team: <a href="mailto:support@edulinkwriters.com" className="text-brand-600 underline">support@edulinkwriters.com</a></li>
        </ul>
      </section>
    </div>
  )
}
