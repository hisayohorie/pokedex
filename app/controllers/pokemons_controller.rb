class PokemonsController < ApplicationController
  def index
  	@pokemons = Pokemon.all

  	respond_to do |format|
  		format.html
  		format.json do
  			# render json: @pokemons.map do |pokemon|
  			# 	{ name: pokemon.name, image_url: pokemon.image_url }
  			# end

  			render json: @pokemons, only: [:name, :image_url]
  		end
  	end
  end

  def show
  	@pokemon = Pokemon.find(params[:id])

  	respond_to do |format|
  		format.html
  		format.json { render json: @pokemon }
  	end
  end
end
