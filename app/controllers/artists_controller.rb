class ArtistsController < ApplicationController
  # Since it's a child controller, change Model_name -> @parent.model_names
  # Also need before action to define @parent
  # for index, no .all
  before_action :set_billboard
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: {artists: @artists, billboard: @billboard}
  end

  def show
    render component: 'Artist', props: {artist: @artist, billboard: @billboard}
  end

  def new
    @artist = @billboard.artists.new
    render component: 'ArtistNew', props: {artist: @artist, billboard: @billboard}
  end

  def create
    @artist = @billboard.artists.new(artist_params)
    if @artist.save
      redirect_to root_path
    else
      render component: 'ArtistNew', props: {artist: @artist, billboard: @billboard}
    end
  end

  def edit
    render component: 'ArtistEdit', props: {artist: @artist, billboard: @billboard}
  end

  def update
    if @artist.update(artist_params)
      redirect_to root_path
    else
      render component: 'ArtistUpdate', props: {artist: @artist, billboard: @billboard}
    end
  end

  def destroy
    @artist.destroy
    redirect_to root_path
  end

  private
    def set_billboard
      @billboard = Billboard.find(params[:billboard_id])
    end

    def set_artist
      @artist = Artist.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:first_name, :last_name)
    end
end
