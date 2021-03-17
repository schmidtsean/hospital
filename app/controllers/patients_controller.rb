class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]

  def index
    @patients = Patient.all
    render component: "Patients", props: { patients: @patients }
  end

  def show
    @patient = Patient.find(params[:id])
    render component: "Patient", props: { patient: @patient, doctors: @patient.doctors}
  end

  def new
    @patient = Patient.new
    render component: "PatientNew", props: { patient: @patient }
  end

  def create
    @patient = Patient.new(patient_params)

    if @patient.save
      redirect_to @patient
    else
      render component: "PatientNew", props: {pateint: @patient}
    end
  end

  def destroy
    @patient.destroy
    redirect_to patient_path
  end

  private
    def set_patient
      @patient = Patient.find(params[:id])
    end

    def patient_params
      params.require(:patient).permit(:first_name, :last_name)
    end
end
