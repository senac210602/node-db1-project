const db = require('../../data/db-config')


 const getAll = () => {
  
 const accounts = db('accounts')
 console.log('ACC', accounts)
 return accounts
} 

const getById = id => {
 return db('accounts').where('id', id).first();
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
