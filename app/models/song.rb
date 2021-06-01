class Song < ApplicationRecord
  belongs_to :artist

  validates :rank, numericality: {only_integer: true}
end
