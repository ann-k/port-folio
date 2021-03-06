class ResumesController < ApplicationController
  before_action :set_resume, only: [:show, :edit, :update, :destroy]

  # GET /resumes
  # GET /resumes.json
  def index
    @resumes = current_user.resumes.ordered_by_creation
    # render :layout => "index"
  end

  # GET /resumes/1
  # GET /resumes/1.json
  def show
  end

  # GET /resumes/new
  def new
    resume = current_user.resumes.create
    resume.update(name: "Новое резюме")
    content = resume.build_content
    content.save
    redirect_to edit_resume_path(resume)
    # render :layout => "edit_resume"
  end

  def copy
    old_resume = current_user.resumes.find(params[:id])
    new_resume = old_resume.dup
    new_resume.name = new_resume.name + " 2"
    new_resume.save

    old_resume.resume_in_portfolios.each do |r_in_p|
      new_r_in_p = r_in_p.dup
      new_r_in_p.update(resume_id: new_resume.id)
    end

    old_content = old_resume.content
    new_content = old_content.dup
    new_content.save
    new_content.update(contentable_id: new_resume.id)

    respond_to do |format|
      format.html { redirect_to resumes_path, notice: 'Resume was successfully duplicated.' }
      format.json { render :index }
    end
  end

  # GET /resumes/1/edit
  def edit
    render :layout => "edit_resume"
  end

  # POST /resumes
  # POST /resumes.json
  def create
    @resume = current_user.resumes.new(resume_params)
    @resume.user_id = current_user.id

    respond_to do |format|
      if @resume.save
        @content = @resume.create_content
        format.html { redirect_to edit_portfolio_path(@resume), notice: 'Resume was successfully created.' }
        format.json { render :show, status: :created, location: @resume }
      else
        format.html { render :new }
        format.json { render json: @resume.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /resumes/1
  # PATCH/PUT /resumes/1.json
  def update
    respond_to do |format|
      if @resume.update(resume_params)
        format.html { redirect_to edit_resume_path, notice: 'Resume was successfully updated.' }
        format.json { render :show, status: :ok, location: @resume }
      else
        format.html { render :edit }
        format.json { render json: @resume.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /resumes/1
  # DELETE /resumes/1.json
  def destroy
    @resume.destroy
    respond_to do |format|
      format.html { redirect_to resumes_url, notice: 'Resume was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resume
      @resume = Resume.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resume_params
      params.require(:resume).permit(:name, :description, :cover, :language, :title, :user_id, portfolio_ids:[],
        resume_in_portfolios_attributes: [:id, :order, :portfolio_id, :resume_id, :_destroy],
      )
    end
end
