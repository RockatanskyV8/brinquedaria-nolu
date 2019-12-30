'use strict'

module.exports = {
  'get'      : "select * from brinquedaria_nolu.usuarios;",
  'specific' : "select * from brinquedaria_nolu.usuarios where id = ?;",
  'create'   : "insert into brinquedaria_nolu.usuarios ( name, pssw ) values ( ?, ? )",
  'update'   : "update brinquedaria_nolu.usuarios set name = ? , pssw = ? where id = ?",
  'delete'   : "delete from brinquedaria_nolu.usuarios where id = ?;"
}
