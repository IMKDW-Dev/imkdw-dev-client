import ContactForm from '../../containers/contact/ContactForm';

export default function ContactPage() {
  return (
    <section className="mobile:pt-[50px] flex w-full justify-center pt-[100px]">
      <div className="mobile:w-[90%] flex w-full max-w-[700px] flex-col gap-10">
        <div className="flex w-full flex-col gap-8">
          <h1 className="w-full text-center text-5xl font-bold">Contact</h1>
          <p className="w-full text-center text-lg tracking-wide">
            Feel free to sene a <b>message</b>, I&apos;ll reply you within <b>24 hours.</b>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
