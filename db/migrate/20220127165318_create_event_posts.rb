class CreateEventPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :event_posts do |t|
      t.string :date_created
      t.string :title
      t.string :content
      t.date :event_date
      t.time :event_time
      t.boolean :event_allday
      t.string :event_location
      t.string :division_target
      t.string :topic
      t.integer :claps
      t.integer :clicks
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :division, null: false, foreign_key: true

      t.timestamps
    end
  end
end
