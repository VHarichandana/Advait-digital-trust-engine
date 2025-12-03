from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    return jsonify({"anomaly_score": 0.42})

app.run(host="0.0.0.0", port=7003)
