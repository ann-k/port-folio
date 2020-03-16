# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

start = Time.now

# Reset Database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke


#Users

@users = [ {email: "user@user.com"}, {email: "test@test.com"} ]

def create_user(user)
  password = "password"

  User.create(
    email:    user[:email],
    password: password,
    password_confirmation: password
  )
end

@users.each do |user|
  u = create_user(user)
  puts "User with email #{u.email} created"
end

@user_ids = [1, 2]


#Portfolios

@portfolios = [
  {name: "Веб портфолио", description: "Для веб-дизайна"},
  {name: "Граф портфолио", description: "Для граф дизайна"},
  {name: "Код портфолио", description: "Для программирования"}
]

def create_portfolio(portfolio, user_id)
  Portfolio.create(
    name:    portfolio[:name],
    description: portfolio[:description],
    user_id: user_id
  )
end

User.all.each do |user|
  5.times do
    portfolio = @portfolios.sample

    p = create_portfolio(portfolio, user.id)
    puts "Portfolio with user id #{p.user_id} and name #{p.name} created"
  end
end


#Projects

@projects_titles = [
  "Сайт",
  "Приложение",
  "Лендинг",
  "Книга"
]

def create_project(user_id)
  Project.create(
    title: @projects_titles.sample,
    user_id: user_id
  )
end

User.all.each do |user|
  30.times do
    p = create_project(user.id)
    puts "Project with user id #{p.user_id} and name #{p.title} created"
  end
end


#Project in portfolio

@portfolios = Portfolio.all

def create_project_in_portfolio(portfolio, project_id)
  portfolio = @portfolios.sample

  portfolio.project_in_portfolios.create(
    project_id: project_id
  )
end

Portfolio.all.each do |portfolio|
  5.times do
    project = Project.all.sample
    project_in_certain_portfolios = Portfolio.find(portfolio.id).projects

    unless project_in_certain_portfolios.include?(project)
      p = create_project_in_portfolio(portfolio, project.id)
      puts "Project in portfolio with portfolio id #{p.portfolio_id} and project id #{p.project_id} created"
    end
  end
end


#Resumes

@resumes = [
  {name: "Веб резюме", description: "Для веб-дизайна"},
  {name: "Граф резюме", description: "Для граф дизайна"},
  {name: "Код резюме", description: "Для программирования"}
]

def create_resume(resume, user_id)
  Resume.create(
    name:    resume[:name],
    description: resume[:description],
    user_id: user_id
  )
end

User.all.each do |user|
  5.times do
    resume = @resumes.sample

    r = create_resume(resume, user.id)
    puts "Resume with user id #{r.user_id} and name #{r.name} created"
  end
end


#Resume in portfolio

@portfolios = Portfolio.all

def create_resume_in_portfolio(portfolio, resume_id)
  portfolio = @portfolios.sample

  portfolio.resume_in_portfolios.create(
    resume_id: resume_id
  )
end

Portfolio.all.each do |portfolio|
  2.times do
    resume = Resume.all.sample
    resume_in_certain_portfolios = Portfolio.find(portfolio.id).resumes

    unless resume_in_certain_portfolios.include?(resume)
      p = create_resume_in_portfolio(portfolio, resume.id)
      puts "Resume in portfolio with portfolio id #{p.portfolio_id} and resume id #{p.resume_id} created"
    end
  end
end


# Contents ??

# after :projects do
#   project = Project.find_by_name('Calculus')
#   project.contents.create(first_name: 'Patrick', last_name: 'Lewis')
# end

finish = Time.now
duration = finish - start
puts "Task completed in #{duration}"
