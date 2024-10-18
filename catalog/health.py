from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/catalog/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'ok'
    }), 200

if __name__ == '__main__':
    app.run(port=5000)