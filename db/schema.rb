# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_03_013246) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "divisions", force: :cascade do |t|
    t.string "name"
    t.boolean "active"
    t.bigint "organization_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_divisions_on_organization_id"
  end

  create_table "e_comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "event_post_id", null: false
    t.text "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_post_id"], name: "index_e_comments_on_event_post_id"
    t.index ["user_id"], name: "index_e_comments_on_user_id"
  end

  create_table "event_posts", force: :cascade do |t|
    t.string "date_created"
    t.string "title"
    t.text "content"
    t.date "event_date"
    t.time "event_time"
    t.boolean "event_allday"
    t.string "event_location"
    t.string "division_target"
    t.string "topic"
    t.integer "claps"
    t.integer "clicks"
    t.bigint "user_id", null: false
    t.bigint "division_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["division_id"], name: "index_event_posts_on_division_id"
    t.index ["user_id"], name: "index_event_posts_on_user_id"
  end

  create_table "news_comments", force: :cascade do |t|
    t.bigint "news_post_id", null: false
    t.bigint "user_id", null: false
    t.text "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["news_post_id"], name: "index_news_comments_on_news_post_id"
    t.index ["user_id"], name: "index_news_comments_on_user_id"
  end

  create_table "news_posts", force: :cascade do |t|
    t.string "date_created"
    t.string "title"
    t.text "content"
    t.string "division_target"
    t.integer "claps"
    t.integer "clicks"
    t.bigint "user_id", null: false
    t.bigint "division_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["division_id"], name: "index_news_posts_on_division_id"
    t.index ["user_id"], name: "index_news_posts_on_user_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.boolean "administrator"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "password_digest"
    t.string "position"
    t.string "phone"
    t.string "extension"
    t.boolean "active"
    t.date "hire_date"
    t.bigint "division_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["division_id"], name: "index_users_on_division_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "divisions", "organizations"
  add_foreign_key "e_comments", "event_posts"
  add_foreign_key "e_comments", "users"
  add_foreign_key "event_posts", "divisions"
  add_foreign_key "event_posts", "users"
  add_foreign_key "news_comments", "news_posts"
  add_foreign_key "news_comments", "users"
  add_foreign_key "news_posts", "divisions"
  add_foreign_key "news_posts", "users"
  add_foreign_key "users", "divisions"
end
