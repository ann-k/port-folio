require "application_system_test_case"

class ProjectInPortfoliosTest < ApplicationSystemTestCase
  setup do
    @project_in_portfolio = project_in_portfolios(:one)
  end

  test "visiting the index" do
    visit project_in_portfolios_url
    assert_selector "h1", text: "Project In Portfolios"
  end

  test "creating a Project in portfolio" do
    visit project_in_portfolios_url
    click_on "New Project In Portfolio"

    fill_in "Order", with: @project_in_portfolio.order
    fill_in "Portfolio", with: @project_in_portfolio.portfolio_id
    fill_in "Project", with: @project_in_portfolio.project_id
    click_on "Create Project in portfolio"

    assert_text "Project in portfolio was successfully created"
    click_on "Back"
  end

  test "updating a Project in portfolio" do
    visit project_in_portfolios_url
    click_on "Edit", match: :first

    fill_in "Order", with: @project_in_portfolio.order
    fill_in "Portfolio", with: @project_in_portfolio.portfolio_id
    fill_in "Project", with: @project_in_portfolio.project_id
    click_on "Update Project in portfolio"

    assert_text "Project in portfolio was successfully updated"
    click_on "Back"
  end

  test "destroying a Project in portfolio" do
    visit project_in_portfolios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Project in portfolio was successfully destroyed"
  end
end
