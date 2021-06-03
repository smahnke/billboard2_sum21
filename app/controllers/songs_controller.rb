class SongsController < ApplicationController
  before_action :set_artist
  before_action :set_song, only: [:show, :edit, :update, :destroy]
  
  def index
    @songs = @artist.songs
    render component: 'Songs', props: {songs: @songs, artist: @artist}
  end

  def show
    render component: 'Song', props: {song: @song, artist: @artist}
  end

  def new
    @song = @artist.song.new
    render component: 'SongNew', props: {song: @song, artist: @artist}
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to root_path
    else
      render component: 'SongNew', props: {song: @song, artist: @artist}
    end
  end

  def edit
    render component: 'SongEdit', props: {song: @song, artist: @artist}
  end

  def update
    if @song.update(song_params)
      redirect_to root_path
    else
      render component: 'SongUpdate', props: {song: @song, artist: @artist}
    end
  end

  def destroy
    @song.destroy
    redirect_to root_path
  end

  private
    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def set_song
      @song = Song.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:title, :rank, :album)
    end
end

