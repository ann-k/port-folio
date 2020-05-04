class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = current_user.projects.ordered_by_creation

    # @projects = Project.all(project_params)
    # if @project.user_id = current_user.id
    # end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @content = @project.content
  end

  # GET /projects/new
  def new
    @project = current_user.projects.new
    @content = @project.build_content
  end

  # GET /projects/1/edit
  def edit
  end

  def upload_cover
    # c = ContentImage.new
    project = Project.find(params[:id])
    project.update(cover: params[:cover])

    # uploader_response = {
    #   "success": 1,
    #   "file": {
    #     "url":  c.data.url,
    #   }
    # }
    # render json: uploader_response
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = current_user.projects.new(project_params)
    @project.user_id = current_user.id

    respond_to do |format|
      if @project.save
        @content = @project.create_content
        format.html { redirect_to edit_project_path(@project), notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to edit_project_path, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = current_user.projects.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:name, :cover, :language, :title, :user_id, :remove_cover, portfolio_ids:[])
    end
end
