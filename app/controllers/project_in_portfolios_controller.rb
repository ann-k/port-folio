class ProjectInPortfoliosController < ApplicationController
  before_action :set_project_in_portfolio, only: [:show, :edit, :update, :destroy]

  def sort_project_in_portfolios
    @project_in_portfolios = ProjectInPortfolio.where(portfolio_id: params[:portfolio_id]).ordered_by_position
    render json: @project_in_portfolios

    params[:newOrder].each_with_index do |order, index|
      @project_in_portfolios[order - 1].update(position: index + 1)
    end
  end

  def sort_project_in_portfolios_from_project_page
    @project_in_portfolios = ProjectInPortfolio.where(portfolio_id: params[:portfolio_id]).ordered_by_position
    render json: @project_in_portfolios

    @project_in_portfolios.length.times do |index|
      @project_in_portfolios[index].update(position: index + 1)
    end
  end

  # GET /project_in_portfolios
  # GET /project_in_portfolios.json
  def index
    # @project_in_portfolios = ProjectInPortfolio.all
    render json: ProjectInPortfolio.ordered_by_position.all
  end

  # GET /project_in_portfolios/1
  # GET /project_in_portfolios/1.json
  def show
  end

  # GET /project_in_portfolios/new
  def new
    @project_in_portfolio = ProjectInPortfolio.new
  end

  # GET /project_in_portfolios/1/edit
  def edit
  end

  # POST /project_in_portfolios
  # POST /project_in_portfolios.json
  def create
    @project_in_portfolio = ProjectInPortfolio.new(project_in_portfolio_params)

    respond_to do |format|
      if @project_in_portfolio.save
        # format.html { redirect_to @project_in_portfolio, notice: 'Project in portfolio was successfully created.' }
        format.json { render :show, status: :created, location: @project_in_portfolio }
        # response = {
        #   "project_in_portfolio_id": @project_in_portfolio.id,
        # }
        # render json: response

      else
        format.html { render :new }
        format.json { render json: @project_in_portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_in_portfolios/1
  # PATCH/PUT /project_in_portfolios/1.json
  def update
    respond_to do |format|
      if @project_in_portfolio.update(project_in_portfolio_params)
        format.html { redirect_to @project_in_portfolio, notice: 'Project in portfolio was successfully updated.' }
        format.json { render :show, status: :ok, location: @project_in_portfolio }
      else
        format.html { render :edit }
        format.json { render json: @project_in_portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_in_portfolios/1
  # DELETE /project_in_portfolios/1.json
  def delete_project_in_portfolio
    project_in_portfolio = ProjectInPortfolio.where("portfolio_id = #{params[:portfolio_id]} and project_id = #{params[:project_id]}")[0]
    ProjectInPortfolio.destroy(project_in_portfolio.id)
  end

  def destroy
    @project_in_portfolio.destroy
    respond_to do |format|
      # format.html { redirect_to project_in_portfolios_url, notice: 'Project in portfolio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_in_portfolio
      @project_in_portfolio = ProjectInPortfolio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_in_portfolio_params
      params.require(:project_in_portfolio).permit(:position, :portfolio_id, :project_id)
    end
end
