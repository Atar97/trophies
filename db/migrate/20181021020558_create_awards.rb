class CreateAwards < ActiveRecord::Migration[5.2]
  def change
    create_table :awards do |t|
      t.string :title, null: false
      t.integer :year, null: false

      t.timestamps
    end
    add_index :awards, :title
    add_index :awards, :year
  end
end