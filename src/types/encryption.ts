export type EncryptionMethod = 'caesar' | 'vigenere' | 'morse';

export interface EncryptionResult {
  originalText: string;
  encryptedText: string;
  method: EncryptionMethod;
  key?: string;
}