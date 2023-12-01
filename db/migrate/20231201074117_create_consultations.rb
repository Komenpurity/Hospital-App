class CreateConsultations < ActiveRecord::Migration[7.1]
  def change
    create_table :consultations do |t|
      t.string :name
      t.string :email
      t.integer :number
      t.string :specialty

      t.timestamps
    end
  end
end
