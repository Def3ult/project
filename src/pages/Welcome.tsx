import React from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Lock, Unlock } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyber-primary mb-8 animate-pulse-green">
            نظام التشفير الآمن
          </h1>
          <p className="text-xl text-cyber-light mb-12">
            اختر العملية التي تريد تنفيذها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/encrypt"
            className="cyber-card p-8 flex flex-col items-center group"
          >
            <Lock className="w-16 h-16 text-cyber-primary mb-4 group-hover:animate-pulse-green" />
            <h2 className="text-2xl font-semibold text-cyber-primary mb-2">تشفير</h2>
            <p className="text-cyber-light text-center">
              قم بتشفير رسالتك باستخدام خوارزميات متعددة
            </p>
          </Link>

          <Link
            to="/decrypt"
            className="cyber-card p-8 flex flex-col items-center group"
          >
            <Unlock className="w-16 h-16 text-cyber-primary mb-4 group-hover:animate-pulse-green" />
            <h2 className="text-2xl font-semibold text-cyber-primary mb-2">فك التشفير</h2>
            <p className="text-cyber-light text-center">
              قم بفك تشفير الرسائل المشفرة
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}