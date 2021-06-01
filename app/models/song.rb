class Song < ApplicationRecord
  belongs_to :artist

  class Song < ActiveRecord::Base
    validates :rank, numericality: {only_integer: true}
  end
end
