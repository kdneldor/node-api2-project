const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

function find(query = {}) {
  const { page = 1, limit = 100, sortBy = "id", sortDir = "asc" } = query;
  const offset = limit * (page - 1);

  return db("posts")
    .orderBy(sortBy, sortDir)
    .limit(limit)
    .offset(offset)
    .select();
}

function findById(id) {
  return db("posts").where({ id }).first();
}

async function add(hub) {
  const [id] = await db("posts").insert(hub);
  return findById(id);
}

async function update(id, changes) {
  await db("posts").where({ id }).update(changes);

  return findById(id);
}

function remove(id) {
  return db("posts").where({ id }).del();
}

function insertComment(postId, comment) {
    const data = {post_id: postId, ...comment}
    const [id] = await db("comments").insert(data)

    
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
