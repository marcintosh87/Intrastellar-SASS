# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts '🌱 Seeding spices...'

Org = Organization.create({ name: 'The Organization' })

Hr =
  Division.create(
    { name: 'Human Resources', active: true, organization_id: Org.id },
  )
Finance =
  Division.create({ name: 'Finance', active: true, organization_id: Org.id })
Legal =
  Division.create({ name: 'Legal', active: true, organization_id: Org.id })
Marketing =
  Division.create({ name: 'Marketing', active: true, organization_id: Org.id })
Business_Development =
  Division.create(
    { name: 'Business Development', active: true, organization_id: Org.id },
  )

divisions = [Hr, Finance, Legal, Marketing, Business_Development]
topics = ['retirement', 'benefits', 'town hall', 'incentives', 'recruitment']
locations = ['atrium', "Mike's Desk", 'Building 50', 'Downtown Courthouse']

5.times do
  User.create(
    {
      administrator: false,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      division: divisions.sample,
      email: Faker::Internet.email,
      password: '123456',
      position: Faker::Job.title,
      phone: Faker::PhoneNumber.cell_phone,
      extension: Faker::PhoneNumber.extension,
      active: true,
      hire_date: Faker::Date.between(from: '2014-09-23', to: '2022-01-25'),
      division_id: Hr.id,
    },
  )
end

5.times do
  User.create(
    {
      administrator: false,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      division: divisions.sample,
      email: Faker::Internet.email,
      password: '123456',
      position: Faker::Job.title,
      phone: Faker::PhoneNumber.cell_phone,
      extension: Faker::PhoneNumber.extension,
      active: true,
      hire_date: Faker::Date.between(from: '2014-09-23', to: '2022-01-25'),
      division_id: Finance.id,
    },
  )
end

5.times do
  User.create(
    {
      administrator: false,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      division: divisions.sample,
      email: Faker::Internet.email,
      password: '123456',
      position: Faker::Job.title,
      phone: Faker::PhoneNumber.cell_phone,
      extension: Faker::PhoneNumber.extension,
      active: true,
      hire_date: Faker::Date.between(from: '2014-09-23', to: '2022-01-25'),
      division_id: Legal.id,
    },
  )
end

5.times do
  User.create(
    {
      administrator: false,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      division: divisions.sample,
      email: Faker::Internet.email,
      password: '123456',
      position: Faker::Job.title,
      phone: Faker::PhoneNumber.cell_phone,
      extension: Faker::PhoneNumber.extension,
      active: true,
      hire_date: Faker::Date.between(from: '2014-09-23', to: '2022-01-25'),
      division_id: Marketing.id,
    },
  )
end

5.times do
  User.create(
    {
      administrator: false,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      division: divisions.sample,
      email: Faker::Internet.email,
      password: '123456',
      position: Faker::Job.title,
      phone: Faker::PhoneNumber.cell_phone,
      extension: Faker::PhoneNumber.extension,
      active: true,
      hire_date: Faker::Date.between(from: '2014-09-23', to: '2022-01-25'),
      division_id: Business_Development.id,
    },
  )
end

15.times do
  NewsPost.create(
    {
      title: Faker::Lorem.sentence(word_count: 3),
      content: Faker::Lorem.paragraph(sentence_count: 5),
      division_target: divisions.sample,
      claps: Faker::Number.within(range: 1..300),
      clicks: Faker::Number.within(range: 1..300),
    },
  )
end

17.times do
  EventPost.create(
    {
      title: Faker::Lorem.sentence(word_count: 3),
      content: Faker::Lorem.paragraph(sentence_count: 5),
      division_target: divisions.sample,
      claps: Faker::Number.within(range: 1..300),
      clicks: Faker::Number.within(range: 1..300),
      topic: topics.sample,
      event_date: Faker::Date.between(from: '2022-02-18', to: '2022-3-25'),
      event_time:
        Faker::Time.between(
          from: DateTime.now - 1,
          to: DateTime.now,
          format: :long,
        ),
      event_allday: false,
      event_location: locations.sample,
    },
  )
end

puts '✅ Done seeding!'
