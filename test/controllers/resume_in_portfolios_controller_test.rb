require 'test_helper'

class ResumeInPortfoliosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @resume_in_portfolio = resume_in_portfolios(:one)
  end

  test "should get index" do
    get resume_in_portfolios_url
    assert_response :success
  end

  test "should get new" do
    get new_resume_in_portfolio_url
    assert_response :success
  end

  test "should create resume_in_portfolio" do
    assert_difference('ResumeInPortfolio.count') do
      post resume_in_portfolios_url, params: { resume_in_portfolio: { order: @resume_in_portfolio.order, portfolio_id: @resume_in_portfolio.portfolio_id, resume_id: @resume_in_portfolio.resume_id } }
    end

    assert_redirected_to resume_in_portfolio_url(ResumeInPortfolio.last)
  end

  test "should show resume_in_portfolio" do
    get resume_in_portfolio_url(@resume_in_portfolio)
    assert_response :success
  end

  test "should get edit" do
    get edit_resume_in_portfolio_url(@resume_in_portfolio)
    assert_response :success
  end

  test "should update resume_in_portfolio" do
    patch resume_in_portfolio_url(@resume_in_portfolio), params: { resume_in_portfolio: { order: @resume_in_portfolio.order, portfolio_id: @resume_in_portfolio.portfolio_id, resume_id: @resume_in_portfolio.resume_id } }
    assert_redirected_to resume_in_portfolio_url(@resume_in_portfolio)
  end

  test "should destroy resume_in_portfolio" do
    assert_difference('ResumeInPortfolio.count', -1) do
      delete resume_in_portfolio_url(@resume_in_portfolio)
    end

    assert_redirected_to resume_in_portfolios_url
  end
end
