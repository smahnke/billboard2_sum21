class Artist < ApplicationRecord
  belongs_to :billboard

  has_many :songs, dependent: :destroy

  class Artist
    validates :title :rank, :album, presence: true
  end
end
