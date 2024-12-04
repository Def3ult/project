import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { caesarCipher, vigenereCipher, morseCode } from '../utils/encryption';
import { EncryptionMethod } from '../types/encryption';
import toast from 'react-hot-toast';

export default function Decrypt() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<EncryptionMethod>('caesar');
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState('');

  const handleDecrypt = () => {
    if (!text) {
      toast.error('الرجاء إدخال النص المشفر');
      return;
    }

    let decryptedText = '';
    switch (method) {
      case 'caesar':
        decryptedText = caesarCipher(text, shift, true);
        break;
      case 'vigenere':
        if (!key) {
          toast.error('الرجاء إدخال كلمة المفتاح');
          return;
        }
        decryptedText = vigenereCipher(text, key, true);
        break;
      case 'morse':
        decryptedText = morseCode(text, true);
        break;
    }

    setResult(decryptedText);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        فك التشفير
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            نوع التشفير
          </label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value as EncryptionMethod)}
            className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            dir="rtl"
          >
            <option value="caesar">شفرة قيصر</option>
            <option value="vigenere">شفرة فيجنر</option>
            <option value="morse">شفرة مورس</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            النص المشفر
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            dir="ltr"
          />
        </div>

        {method === 'caesar' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              مقدار الإزاحة
            </label>
            <input
              type="number"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value) || 0)}
              className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              min="1"
              max="25"
            />
          </div>
        )}

        {method === 'vigenere' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              كلمة المفتاح
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              dir="rtl"
            />
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleDecrypt}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            فك التشفير
          </button>
          <button
            onClick={() => navigate('/welcome')}
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            رجوع
          </button>
        </div>

        {result && (
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">النتيجة:</h2>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-gray-800" dir="rtl">
                {result}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}