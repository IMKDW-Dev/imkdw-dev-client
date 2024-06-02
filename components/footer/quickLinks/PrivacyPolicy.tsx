'use client';

import { useState } from 'react';
import CommonModal from '../../common/modals/CommonModal';

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  const TEXT = [
    {
      title: '개인정보의 처리 목적',
      content: 'IMKDW Dev은 회원가입 및 서비스 제공을 위해 최소한의 개인정보를 수집하고 있습니다.',
    },
    {
      title: '처리하는 개인정보의 항목',
      content: 'IMKDW Dev에서 수집하는 개인정보는 이메일 주소 뿐입니다.',
    },
    {
      title: '개인정보의 제3자 제공',
      content: 'IMKDW Dev은 이용자의 개인정보를 제3자에게 제공하지 않습니다.',
    },
    {
      title: '정보주체의 권리와 의무 및 행사방법',
      content:
        '이용자는 개인정보주체로서 권리를 행사할 수 있습니다. 이에 대한 구체적인 내용과 행사방법은 IMKDW Dev의 개발자에게 이메일로 문의하시기 바랍니다.',
    },
    {
      title: '개인정보 보호책임자',
      content:
        'IMKDW Dev의 개인정보 보호책임자는 사이트의 개발자 본인입니다. 개인정보 관련 문의사항이 있으시면 사이트 내 연락처로 문의 주시기 바랍니다.',
    },
  ];

  return (
    <>
      <li className="border-b border-box p-2 pb-3 pt-3">
        <button
          type="button"
          className="flex items-center justify-between hover:text-accent"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-lg">Privacy Policy</span>
        </button>
      </li>
      {isOpen && (
        <CommonModal title="Privacy Policy" onClose={() => setIsOpen(false)}>
          <ul className="flex flex-col gap-5 p-4 pb-6 pt-6">
            {TEXT.map((text) => (
              <li key={text.title}>
                <h3 className="text-[16px] font-bold text-[#343A40]">{text.title}</h3>
                <p className="text-[14px] text-[#6C757D]">{text.content}</p>
              </li>
            ))}
          </ul>
        </CommonModal>
      )}
    </>
  );
}
