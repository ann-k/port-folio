class ProjectInPortfoliosController < ApplicationController
  before_action :set_project_in_portfolio, only: [:show, :edit, :update, :destroy]

  def certain_portfolio_project_in_portfolios
    @project_in_portfolios = ProjectInPortfolio.where(portfolio_id: params[:portfolio_id])
    render json: @project_in_portfolios

    @project_in_portfolios.each_with_index do |item, index|
      # puts "OLD POSITION"
      # puts item.position
      puts "TO BE CHANGED INTO"
      puts params[:newOrder][index]
      item.update(position: params[:newOrder][index])
      # puts "OLD POSITION"
      # puts item.position
      puts "HAS CHANGED INTO"
      puts params[:newOrder][index]
      puts "~~~~~~~~~~~~~~~~"
    end
  end

  # GET /project_in_portfolios
  # GET /project_in_portfolios.json
  def index
    # @project_in_portfolios = ProjectInPortfolio.all
    render json: ProjectInPortfolio.all
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
        format.html { redirect_to @project_in_portfolio, notice: 'Project in portfolio was successfully created.' }
        format.json { render :show, status: :created, location: @project_in_portfolio }
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
  def destroy
    @project_in_portfolio.destroy
    respond_to do |format|
      format.html { redirect_to project_in_portfolios_url, notice: 'Project in portfolio was successfully destroyed.' }
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
