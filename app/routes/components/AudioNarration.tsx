import { useRef, useState } from "react";

export default function AudioNarration() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [enabled, setEnabled] = useState(false);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (!enabled) {
            audio.volume = 0;
            audio.play();

            // Fade in
            let vol = 0;
            const fade = setInterval(() => {
                vol += 0.01;
                audio.volume = Math.min(vol, 0.15);
                if (vol >= 0.15) clearInterval(fade);
            }, 150);
        } else {
            audio.pause();
        }

        setEnabled(!enabled);
    };

    return (
        <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 999 }}>
            <button
                onClick={toggle}
                style={{
                    background: "black",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid white",
                    cursor: "pointer",
                    fontSize: "14px"
                }}
            >
                {enabled ? "🔊 Narration On" : "🔇 Narration Off"}
            </button>

            <audio
                ref={audioRef}
                src="/audio/douglass.mp3"
                loop
            />
        </div>
    );
}
