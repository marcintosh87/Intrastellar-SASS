class RemoveUserColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :division
  end
end
