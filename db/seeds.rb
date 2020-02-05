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

def random_user_id
end


#Portfolios

@portfolios = [
  {name: "Веб-дизайн портфолио", description: "Для веб-дизайна", user_id: 1},
  {name: "Граф дизайн портфолио", description: "Для граф дизайна", user_id: 1},
  {name: "Программирование портфолио", description: "Для программирования", user_id: 1},
  {name: "Веб-дизайн портфолио", description: "Для веб-дизайна", user_id: 2},
  {name: "Граф дизайн портфолио", description: "Для граф дизайна", user_id: 2},
  {name: "Программирование портфолио", description: "Для программирования", user_id: 2}
]

def create_portfolio(portfolio)
  Portfolio.create(
    name:    portfolio[:name],
    description: portfolio[:description],
    user_id: portfolio[:user_id]
  )
end

@portfolios.each do |portfolio|
  p = create_portfolio(portfolio)
  puts "Portfolio with name #{p.name} and user id #{p.user_id} created"
end

#Projects

@projects = [
  {name: "Мой первый проект"},
  {name: "Мой второй проект"},
  {name: "Мой третий проект"}
]

def create_project1(project)
  Project.create(
    name: project[:name],
    user_id: 1
  )
end

def create_project2(project)
  Project.create(
    name: project[:name],
    user_id: 2
  )
end

@projects.each do |project|
  p = create_project1(project)
  puts "Project with name #{p.name} and user id #{p.user_id} created"

  p = create_project2(project)
  puts "Project with name #{p.name} and user id #{p.user_id} created"
end

#Projects in portfolio

# @project_in_portfolios = [
#   {order: "?"},
# ]
#
# def create_project_in_portfolio(project_in_portfolio, project)
#   Portfolio.create(
#     order:    project_in_portfolio[:order],
#     project_id: project[:id]
#   )
# end
#
# @project_in_portfolios.each do |project_in_portfolio|
#   p = create_project_in_portfolio(project_in_portfolio)
#   puts "Project in portfolio with name #{p.name} and user id #{p.user_id} created"
# end


#Resumes

# Contents ??

# after :projects do
#   project = Project.find_by_name('Calculus')
#   project.contents.create(first_name: 'Patrick', last_name: 'Lewis')
# end

finish = Time.now
duration = finish - start
puts "Task completed in #{duration}"
