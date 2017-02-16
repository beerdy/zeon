class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name
      t.string :contact
      t.text :message

      t.timestamps null: false
    end
  end
end
