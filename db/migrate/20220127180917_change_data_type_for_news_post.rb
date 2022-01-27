class ChangeDataTypeForNewsPost < ActiveRecord::Migration[6.1]
  def change
    change_column :news_posts, :content, :text
  end
end
