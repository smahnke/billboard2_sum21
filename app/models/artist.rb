class Artist < ApplicationRecord
  belongs_to :billboard

  has_many :songs, dependent: :destroy

  validates :first_name, :last_name, presence: true
end
