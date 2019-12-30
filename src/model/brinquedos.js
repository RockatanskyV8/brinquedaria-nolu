'use strict'

module.exports = {
  'get'      : "select * from brinquedaria_nolu.brinquedos;",
  'specific' : "select * from brinquedaria_nolu.brinquedos where id = ?;",
  'create'   : "insert into brinquedaria_nolu.brinquedos ( name, value ) values ( ?, ? )",
  'update'   : "update brinquedaria_nolu.brinquedos set name = ? , value = ? where id = ?",
  'delete'   : "delete from brinquedaria_nolu.brinquedos where id = ?;"
}
