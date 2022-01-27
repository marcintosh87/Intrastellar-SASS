class ChangeDataTypeForEventsPost < ActiveRecord::Migration[6.1]
  def change
    change_column :event_posts, :content, :text
  end
end
