# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Todo.destroy_all

  puts "creating todos..."

  Todo.create!(title: "wash car", body: "with soap", done: false)
  Todo.create!(title: "wash dog", body: "with shampoo", done: true)

  # Step.create!(id: 1, title: "wash car", body: "with soap", done: false)
  # Step.create!(id: 1, title: "wash car", body: "with soap", done: false)
end

# steps: {
#   1: {
#     id: 1,
#     title: 'walk to store',
#     done: false,
#     todo_id: 1
#   },
#   2: {
#     id: 2,
#     title: 'buy soap',
#     done: false,
#     todo_id: 1
#   }
# }