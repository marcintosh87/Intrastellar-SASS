class RemoveNewsPostsFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events_comments, :news_post_id
  end
end
