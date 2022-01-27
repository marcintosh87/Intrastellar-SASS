class CreateDivisions < ActiveRecord::Migration[6.1]
  def change
    create_table :divisions do |t|
      t.string :name
      t.boolean :active
      t.belongs_to :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
