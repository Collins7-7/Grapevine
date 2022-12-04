class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.string :photo
      t.integer :user_id
      t.string :category_id

      t.timestamps
    end
  end
end
