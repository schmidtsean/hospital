class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validates :time, presence: true
end
