class AppointmentsController < ApplicationController
    before_action :set_doctor
  
    def index
    @eights = @doctor.appointments.where(time: 'eight')
    @nines = @doctor.appointments.where(time: 'nine')
    
      render component: "Appointments", props: { 
        doctor: @doctor, eights: @eights, nines: @nines, patients: Patient.all
      }
    end
  
    def new
      @appointment = @doctor.appointments.new
      @patients = Patient.all - @doctor.patients
      render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, patients: @patients}
    end
  
    def create
      @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointments_path(@doctor)
    else
      @patients = Patinet.all - @doctor.patients
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
       params.require(:appointment).permit(:datetime, :patient_id)
     end
  end