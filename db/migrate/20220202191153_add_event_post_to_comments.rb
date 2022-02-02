class AddEventPostToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :events_comments, :event_posts, null: false, foreign_key: true
  end
end
