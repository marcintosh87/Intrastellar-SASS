class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.boolean :administrator
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :password_digest
      t.string :position
      t.string :division
      t.string :phone
      t.string :extension
      t.boolean :active
      t.date :hire_date
      t.belongs_to :division, null: false, foreign_key: true

      t.timestamps
    end
  end
end
