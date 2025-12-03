from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    return jsonify({"deepfake_prob": 0.12})
    
app.run(host="0.0.0.0", port=7002)

