class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  class Billboard < ActiveRecord::Base
    validates :title, :week, presence: true
  end
end
