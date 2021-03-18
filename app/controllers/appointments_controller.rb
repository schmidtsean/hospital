class AppointmentsController < ApplicationController
  before_action :set_doctor

  def index
    # @eights = @doctor.appointments.where(time: 'eight')
    # @nines = @doctor.appointments.where(time: 'nine')
    @appointments = @doctor.appointments#.sort { |a, b| a.time <=> b.time }

    render component: "Appointments", props: { 
      doctor: @doctor, appointments: @appointments, patients: Patient.all
    }
  end

  def new
    @appointment = @doctor.appointments.new
    @patients = Patient.all - @doctor.patients
    render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, patients: @patients}
  end

  def create
    @appointment = @doctor.appointments.new(appointment_params)
    #  binding.pry
    if @appointment.save
    #  binding.pry
      redirect_to doctor_appointments_path(@doctor)
    else
      # binding.pry
      @patients = Patient.all - @doctor.patients
      render component: "DoctorNew", props: { doctor: @doctor, appointment: @appointment, patients: @patients }
    end
  end

  def destroy
    @appointment = @doctor.appointments.find(params[:id])
    @appointment.destroy
    redirect_to doctor_appointments_path(@doctor)
  end

  private
    
  def set_doctor
    @doctor = Doctor.find(params[:doctor_id]) 
  end

  def appointment_params
    params.require(:appointment).permit(:time, :patient_id)
  end
end