import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      return match;
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
  <View style={styles.line}>
    {parts.map((part, index) =>
      'chord' in part ? (
        <Text key={index} style={styles.chord}>{`[${part.chord}]`}</Text>
      ) : (
        <Text key={index} style={styles.lyrics}>{part.text}</Text>
      )
    )}
  </View>
);

interface SongProps {
  text: string;
}

// Main Song component for rendering the song
const Song: React.FC<SongProps> = ({ text }) => {
  const songData = parseSong(text);

  return (
    <View>
      {songData.map((parts, index) => (
        <SongLine key={index} parts={parts} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  chord: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 14, // Smaller font size for superscript effect
    lineHeight: 14, // Adjust lineHeight to control vertical position
    // Additional styles to mimic <sup> effect can be added here
  },
  lyrics: {
    fontSize: 16, // Adjust according to your design
    lineHeight: 20, // Ensure lineHeight gives enough space for superscript
  },
});

export default Song;
