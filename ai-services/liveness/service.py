from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    return jsonify({"liveness_score": 0.92, "status": "real"})

app.run(host="0.0.0.0", port=7001)

