class DropEventComments < ActiveRecord::Migration[6.1]
  def change
    drop_table :events_comments
  end
end
