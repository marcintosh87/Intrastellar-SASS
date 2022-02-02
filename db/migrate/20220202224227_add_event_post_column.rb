class AddEventPostColumn < ActiveRecord::Migration[6.1]
  def change
    add_reference :events_comments, :event_posts, foreign_key: true
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
