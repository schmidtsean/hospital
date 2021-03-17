class AddDatetimeToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :schedule, :datetime
  end
end
