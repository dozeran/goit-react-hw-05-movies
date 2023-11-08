import React from 'react';

const CastList = ({ actors }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div>
      {actors.map(({ id, profile_path, name, character }) => {
        return (
          <div key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={150}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CastList;
