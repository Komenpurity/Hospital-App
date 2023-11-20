class CreateHospitals < ActiveRecord::Migration[7.1]
  def change
    create_table :hospitals do |t|
      t.string :title
      t.integer :year
      t.string :description

      t.timestamps
    end
  end
end
