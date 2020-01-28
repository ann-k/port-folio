require 'test_helper'

class ProjectInPortfoliosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_in_portfolio = project_in_portfolios(:one)
  end

  test "should get index" do
    get project_in_portfolios_url
    assert_response :success
  end

  test "should get new" do
    get new_project_in_portfolio_url
    assert_response :success
  end

  test "should create project_in_portfolio" do
    assert_difference('ProjectInPortfolio.count') do
      post project_in_portfolios_url, params: { project_in_portfolio: { order: @project_in_portfolio.order, portfolio_id: @project_in_portfolio.portfolio_id, project_id: @project_in_portfolio.project_id } }
    end

    assert_redirected_to project_in_portfolio_url(ProjectInPortfolio.last)
  end

  test "should show project_in_portfolio" do
    get project_in_portfolio_url(@project_in_portfolio)
    assert_response :success
  end

  test "should get edit" do
    get edit_project_in_portfolio_url(@project_in_portfolio)
    assert_response :success
  end

  test "should update project_in_portfolio" do
    patch project_in_portfolio_url(@project_in_portfolio), params: { project_in_portfolio: { order: @project_in_portfolio.order, portfolio_id: @project_in_portfolio.portfolio_id, project_id: @project_in_portfolio.project_id } }
    assert_redirected_to project_in_portfolio_url(@project_in_portfolio)
  end

  test "should destroy project_in_portfolio" do
    assert_difference('ProjectInPortfolio.count', -1) do
      delete project_in_portfolio_url(@project_in_portfolio)
    end

    assert_redirected_to project_in_portfolios_url
  end
end
