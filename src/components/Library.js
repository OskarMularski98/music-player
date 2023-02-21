import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, isPlaying, audioRef }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            songs={songs}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
