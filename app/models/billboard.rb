class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :title, :week, presence: true
end
