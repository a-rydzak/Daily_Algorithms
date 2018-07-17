ActiveRecord::Schema.define(version: 20180628164543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "convoy_plans", force: :cascade do |t|
    t.string   "title"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "convoy_plans", ["user_id"], name: "index_convoy_plans_on_user_id", using: :btree

  create_table "permissions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "invited_user"
    t.string   "permission_plan"
    t.string   "permission_vehicle"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "convoy_plan_id"
    t.string   "permission_view"
  end

  add_index "permissions", ["user_id"], name: "index_permissions_on_user_id", using: :btree

  create_table "plans", force: :cascade do |t|
    t.text     "situation"
    t.text     "mission"
    t.text     "execution"
    t.text     "service_support"
    t.text     "command_signal"
    t.integer  "convoy_plan_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "plans", ["convoy_plan_id"], name: "index_plans_on_convoy_plan_id", using: :btree

  create_table "soldiers", force: :cascade do |t|
    t.string   "soldier_name"
    t.string   "rank"
    t.string   "position"
    t.integer  "vehicle_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "convoy_plan_id"
  end

  add_index "soldiers", ["vehicle_id"], name: "index_soldiers_on_vehicle_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "user_name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "vehicles", force: :cascade do |t|
    t.string   "vehicle_type"
    t.string   "call_sign"
    t.integer  "serial_number"
    t.integer  "order_of_movement"
    t.string   "bumper_number"
    t.integer  "convoy_plan_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "vehicles", ["convoy_plan_id"], name: "index_vehicles_on_convoy_plan_id", using: :btree

  add_foreign_key "convoy_plans", "users"
  add_foreign_key "permissions", "users"
  add_foreign_key "plans", "convoy_plans"
  add_foreign_key "soldiers", "vehicles"
  add_foreign_key "vehicles", "convoy_plans"
end
