import { Metadata } from 'next';
import ContactForm from '../../containers/contact/ContactForm';
import generateCustomMetadata from '../../utils/metadata';

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: 'Contact',
    desc: '문의사항이 있을 경우 연락주세요. 최대한 빠르게 답변드리겠습니다.',
    link: 'https://imkdw.dev/contact',
  }),
};

export default function ContactPage() {
  return (
    <section className="flex w-full justify-center pt-[100px] mobile:pt-[50px]">
      <div className="flex w-full max-w-[700px] flex-col gap-10 mobile:w-[90%]">
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
