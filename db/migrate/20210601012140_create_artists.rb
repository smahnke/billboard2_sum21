class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.text :first_name
      t.text :last_name
      t.belongs_to :billboard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
