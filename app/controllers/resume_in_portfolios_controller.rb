class ResumeInPortfoliosController < ApplicationController
  before_action :set_resume_in_portfolio, only: [:show, :edit, :update, :destroy]

  # GET /resume_in_portfolios
  # GET /resume_in_portfolios.json
  def index
    @resume_in_portfolios = ResumeInPortfolio.all
  end

  # GET /resume_in_portfolios/1
  # GET /resume_in_portfolios/1.json
  def show
  end

  # GET /resume_in_portfolios/new
  def new
    @resume_in_portfolio = ResumeInPortfolio.new
  end

  # GET /resume_in_portfolios/1/edit
  def edit
  end

  # POST /resume_in_portfolios
  # POST /resume_in_portfolios.json
  def create
    @resume_in_portfolio = ResumeInPortfolio.new(resume_in_portfolio_params)

    respond_to do |format|
      if @resume_in_portfolio.save
        format.html { redirect_to @resume_in_portfolio, notice: 'Resume in portfolio was successfully created.' }
        format.json { render :show, status: :created, location: @resume_in_portfolio }
      else
        format.html { render :new }
        format.json { render json: @resume_in_portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /resume_in_portfolios/1
  # PATCH/PUT /resume_in_portfolios/1.json
  def update
    respond_to do |format|
      if @resume_in_portfolio.update(resume_in_portfolio_params)
        format.html { redirect_to @resume_in_portfolio, notice: 'Resume in portfolio was successfully updated.' }
        format.json { render :show, status: :ok, location: @resume_in_portfolio }
      else
        format.html { render :edit }
        format.json { render json: @resume_in_portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /resume_in_portfolios/1
  # DELETE /resume_in_portfolios/1.json
  def destroy
    @resume_in_portfolio.destroy
    respond_to do |format|
      format.html { redirect_to resume_in_portfolios_url, notice: 'Resume in portfolio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resume_in_portfolio
      @resume_in_portfolio = ResumeInPortfolio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resume_in_portfolio_params
      params.require(:resume_in_portfolio).permit(:order, :portfolio_id, :resume_id)
    end
end
