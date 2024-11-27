from flask import Flask, render_template, g, redirect, request, jsonify
import sqlite3

from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

def ligar_banco():
    banco = g._database = sqlite3.connect('banco.db')
    return banco

@app.route('/')
def Index():  # put application's code here
    return render_template("index.html", Titulo='Index')

@app.route('/criar', methods=['POST'])
def criar():
        nome = request.form['nome']
        email = request.form['email']
        telefone = request.form['telefone']
        data = request.form['data']
        assunto = request.form['assunto']
        banco = ligar_banco()
        cursor = banco.cursor()

        cursor.execute('INSERT INTO cadastro (nome, email, telefone, data, assunto)'
            'VALUES (?, ?, ?, ?, ?);'
        , (nome, email, telefone, data, assunto))
        banco.commit()
        return redirect('/')

if __name__ == '__main__':
    app.run()
