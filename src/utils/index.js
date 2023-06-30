/* eslint-disable camelcase */
const mapDBToAlbum = ({
  id,
  name,
  year,
  songs,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  year,
  songs,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBToSong = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = {
  mapDBToAlbum,
  mapDBToSong,
};
