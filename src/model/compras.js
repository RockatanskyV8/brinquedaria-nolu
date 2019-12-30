'use strict'

module.exports = {
  'get'      : "select * from brinquedaria_nolu.compras;",
  'create'   : "insert into brinquedaria_nolu.compras ( id_brinquedos, id_usuarios ) values ( ?, ? )",
  'update'   : "update brinquedaria_nolu.compras set id_brinquedos = ?, id_usuarios = ? where id_brinquedos = ? and id_usuarios = ?",
  'delete'   : "delete from brinquedaria_nolu.compras where id_brinquedos = ? and id_usuarios = ?;"
}
