class CreateNewsPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :news_posts do |t|
      t.string :date_created
      t.string :title
      t.string :content
      t.string :division_target
      t.integer :claps
      t.integer :clicks
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :division, null: false, foreign_key: true

      t.timestamps
    end
  end
end
