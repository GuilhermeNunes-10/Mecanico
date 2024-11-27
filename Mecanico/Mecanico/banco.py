import sqlite3
conexao = sqlite3.connect('banco.db')
cursor = conexao.cursor()
cursor.execute(
               'CREATE TABLE IF NOT EXISTS cadastro ('
               'id INTEGER PRIMARY KEY,'
               'nome TEXT,'
               'email TEXT,'
               'telefone TEXT,'
               'data TEXT,'
               'assunto TEXT)'
)