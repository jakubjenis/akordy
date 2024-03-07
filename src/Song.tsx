import React from 'react';

interface Chord {
  chord: string;
}

interface Lyrics {
  text: string;
}

type SongPart = Chord | Lyrics;

// Helper function to parse song text and split into chords and lyrics
function parseSong(text: string): SongPart[][] {
  return text.split('\n').map((line) => {
    const parts: SongPart[] = [];
    let currentIndex = 0;

    line.replace(/\[(.*?)\]/g, (match, chord, index) => {
      // Add lyrics part before the chord
      if (index > currentIndex) {
        parts.push({ text: line.substring(currentIndex, index) });
      }
      // Add chord
      parts.push({ chord });
      currentIndex = index + match.length;
      return match; // Return value not used
    });

    // Add remaining lyrics after the last chord
    if (currentIndex < line.length) {
      parts.push({ text: line.substring(currentIndex) });
    }

    return parts;
  });
}

interface SongLineProps {
  parts: SongPart[];
}

// SongLine component for rendering individual lines with chords inline
const SongLine: React.FC<SongLineProps> = ({ parts }) => (
  <div>
    {parts.map((part, index) =>
      'chord' in part ? (
        <sup key={index} style={{ fontWeight: 'bold', color: 'blue', fontSize:'120%'}}>{`[${part.chord}]`}</sup>
      ) : (
        <span key={index}>{part.text}</span>
      )
    )}
  </div>
);

interface SongProps {
  text: string;
}

// Main Song component for rendering the song
const Song: React.FC<SongProps> = ({ text }) => {
  const songData = parseSong(text);

  return (
    <div>
      {songData.map((parts, index) => (
        <SongLine key={index} parts={parts} />
      ))}
    </div>
  );
};

export default Song;
