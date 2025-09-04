"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { CEFR_COLORS } from "@/lib/constants/colors";
import { Word } from "@/lib/types/word";
import Badge from "@/ui/Badge";

export default function WordCard({ word }: { word: Word }) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const synthRef = useRef(typeof window !== "undefined" ? window.speechSynthesis : null);

  // Load available TTS voices (some browsers load asynchronously)
  useEffect(() => {
    if (!synthRef.current) return;

    const loadVoices = () => {
      const v = synthRef.current!.getVoices();
      if (v.length) setVoices(v);
    };

    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;

    return () => {
      if (synthRef.current) {
        synthRef.current.onvoiceschanged = null;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        synthRef.current.cancel(); // stop any pending speech on unmount
      }
    };
  }, []);

  const pickVoice = useCallback(
    (lang: string) => {
      // Prefer exact match, then startsWith
      const exact = voices.find((v) => v.lang?.toLowerCase() === lang.toLowerCase());
      if (exact) return exact;
      return voices.find((v) => v.lang?.toLowerCase().startsWith(lang.toLowerCase())) || undefined;
    },
    [voices]
  );

  const speak = useCallback(
    (text: string, lang = "en-US", rate = 1, pitch = 1) => {
      if (!synthRef.current) return;
      if (!text?.trim()) return;

      // cancel any ongoing utterance for snappier UX
      synthRef.current.cancel();

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      const voice = pickVoice(lang);
      if (voice) utter.voice = voice;
      utter.rate = rate;
      utter.pitch = pitch;

      synthRef.current.speak(utter);
    },
    [pickVoice]
  );

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200" key={word.word}>
      <div className="flex items-center gap-2">
        <h2 className="font-decoration text-xl md:text-2xl font-medium mb-2 text-[#3F6B5C]">{word.word}</h2>

        {/* Speak the single word (English) */}
        <button
          type="button"
          aria-label={`Play pronunciation for ${word.word}`}
          title="Play pronunciation"
          onClick={() => speak(word.word, "en-US", 0.95, 1)}
          className="cursor-pointer text-xl opacity-60 text-[#3F6B5C] hover:opacity-100 transition"
        >
          ♪
        </button>
      </div>

      <p className="ipa text-gray-500 text-sm mb-2">{word.ipa}</p>

      <div className="mb-4">
        <p className="text-gray-700 mb-4">{word.meaning[0].vi}</p>

        <p className="text-gray-700 font-semibold flex items-start gap-2">
          <span>{word.meaning[0].example_en}</span>

          {/* Speak the English example sentence */}
          <button
            type="button"
            aria-label="Play example sentence"
            title="Play example sentence"
            onClick={() => speak(word.meaning[0].example_en, "en-US", 1, 1)}
            className="cursor-pointer text-sm leading-6 opacity-60 text-[#3F6B5C] hover:opacity-100 transition"
          >
            ♪
          </button>
        </p>

        <p className="italic text-gray-800">{word.meaning[0].example_vi}</p>
      </div>

      <p className="text-sm text-gray-600">
        <Badge className={CEFR_COLORS[word.cefr_level]}>CEFR Level {word.cefr_level}</Badge>
      </p>
    </div>
  );
}
