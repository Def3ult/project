import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EncryptionMethod } from '../types/encryption';
import { KeyRound, Hash, Music } from 'lucide-react';

export default function EncryptionMethodPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<EncryptionMethod | null>(null);

  const methods = [
    {
      id: 'caesar',
      name: 'شفرة قيصر',
      description: 'تشفير بسيط يعتمد على إزاحة الحروف',
      icon: KeyRound,
      color: 'text-blue-600',
    },
    {
      id: 'vigenere',
      name: 'شفرة فيجنر',
      description: 'تشفير متقدم يستخدم كلمة مفتاحية',
      icon: Hash,
      color: 'text-purple-600',
    },
    {
      id: 'morse',
      name: 'شفرة مورس',
      description: 'تحويل النص إلى نقاط وشرطات',
      icon: Music,
      color: 'text-green-600',
    },
  ];

  const handleMethodSelect = (method: EncryptionMethod) => {
    setSelectedMethod(method);
    navigate(`/encrypt/${method}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        اختر طريقة التشفير
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <button
              key={method.id}
              onClick={() => handleMethodSelect(method.id as EncryptionMethod)}
              className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center ${
                selectedMethod === method.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <Icon className={`w-12 h-12 mx-auto mb-4 ${method.color}`} />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {method.name}
              </h2>
              <p className="text-gray-600">{method.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}